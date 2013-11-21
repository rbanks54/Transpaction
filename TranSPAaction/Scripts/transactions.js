/// <reference path="require.js" />
/// <reference path="knockout-3.0.0.js" />
'use strict';

define(['ko', 'services','hubs'], function(ko, service) {
    return function () {
        var self = this;
        var svc = new service();

        var refresh = function (data) {
            self.transactions(data);
        };

        self.transactions = ko.observableArray([]);
        svc.loadTransactions().done(refresh);

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
        };

        $.connection.hub.start().done(function () {
            self.enabled = true;
        });
    };
});

