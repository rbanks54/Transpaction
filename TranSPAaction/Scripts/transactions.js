'use strict';

function transactionModel(date, details, credit, debit) {
    var self = this;
    self.date = ko.observable(date);
    self.details = ko.observable(details);
    self.creditAmount = ko.observable(credit || 0);
    self.debitAmount = ko.observable(debit || 0);
};

function transactionsViewModel() {
    var self = this;
    self.transactions = ko.observableArray([
        new transactionModel('1/1/2013', 'first', 10),
        new transactionModel('2/1/2013', 'second',undefined,10)
    ]);
};

ko.applyBindings(new transactionsViewModel());