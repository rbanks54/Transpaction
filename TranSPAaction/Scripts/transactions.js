'use strict';

define(['ko','services'], function (ko, services) {
    var me = {};

    me.transactionModel = function(date, details, credit, debit) {
        var self = this;
        self.date = ko.observable(date);
        self.details = ko.observable(details);
        self.credit = ko.observable(credit || 0);
        self.debit = ko.observable(debit || 0);
    };

    me.transactionsViewModel = function() {
        var self = this;
        var data = services.loadTransactions();
        var models = [];
        data.forEach(function (d) {
            models.push(new me.transactionModel(d.date,d.details,d.credit,d.debit));
        });

        self.transactions = ko.observableArray(models);
    };

    return me;
});
