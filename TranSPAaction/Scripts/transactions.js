/// <reference path="knockout-3.0.0.js" />
'use strict';

var transpaction = (function () {
    var my = {};

    my.transactionModel = function(date, details, credit, debit) {
        var self = this;
        self.date = ko.observable(date);
        self.details = ko.observable(details);
        self.creditAmount = ko.observable(credit || 0);
        self.debitAmount = ko.observable(debit || 0);
    };

    my.transactionsViewModel = function() {
        var self = this;
        self.transactions = ko.observableArray([
            new my.transactionModel('1/1/2013', 'first', 10),
            new my.transactionModel('2/2/2013', 'second', undefined, 10)
        ]);
    };

    return my;
})();

ko.applyBindings(new transpaction.transactionsViewModel());
