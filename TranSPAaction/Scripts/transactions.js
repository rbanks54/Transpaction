/// <reference path="require.js" />
/// <reference path="knockout-3.0.0.js" />
'use strict';

define(['ko', 'services'], function(ko, service) {
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
        };
    };
});

