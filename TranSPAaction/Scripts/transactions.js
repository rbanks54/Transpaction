/// <reference path="require.js" />
/// <reference path="knockout-3.0.0.js" />
'use strict';

define(['ko', 'services','d3','hubs'], function(ko, service, d3) {
    return function () {
        var self = this;
        var svc = new service();

        self.transactions = ko.observableArray([]);

        self.chartit = function () {
            var data = [];

            for (var i = 0, len = self.transactions().length; i < len; i++) {
                data = data.concat(self.transactions()[i].creditAmount);
            }

            var chartScale = d3.scale.linear()
                            .domain([0, d3.max(data)])
                            .range([0, 420]);

            d3.select("#chart")
                .selectAll("div")
                .data(data)
              .enter().append("div")
                //.style("width", function (d) { return d * 10 + "px"; })
                .style("width", function (d) { return chartScale(d) + "px"; })
                .text(function (d) { return d; });
        };

        self.refresh = function (data) {
            self.transactions(data);
            self.chartit();
        };

        svc.loadTransactions().done(self.refresh);

        self.newTxDescription = ko.observable(undefined);
        self.addTransaction = function() {
            self.transactions.push({
                date: '1/1/2013',
                details: self.newTxDescription(),
                creditAmount: 10,
                debitAmount: 0
            });
            if (self.enabled === true) {
                self.transactionHub.server.sendUpdate(self.newTxDescription());
            }
            self.chartit();
        };

        
        self.enabled = false;

        self.transactionHub = $.connection.transactionHub;
        // Create a callback function that the hub uses to broadcast messages.
        self.transactionHub.client.broadcastMessage = function (date, description, credit, debit) {
            self.transactions.push({
                date: date,
                details: description,
                creditAmount: credit,
                debitAmount: debit
            });
            self.chartit();
        };

        $.connection.hub.start().done(function () {
            self.enabled = true;
        });

    };
});

