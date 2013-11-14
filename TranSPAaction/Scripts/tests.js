/// <reference path="knockout-3.0.0.js" />
/// <reference path="qunit-1.12.0.js" />
/// <reference path="transactions.js" />
/// <reference path="services.js" />

(function () {

    var viewModel = {};

    QUnit.module('transactions', {
        setup: function () {
            viewModel = new transpaction.transactionsViewModel();
        }
    });

    QUnit.test('transaction viewmodel', function () {
        QUnit.ok(viewModel.transactions().length === 2, '');
    });

    QUnit.test('should all have dates', function (assert) {
        var transactions = viewModel.transactions();
        for (var i = 0; i < transactions.length; i++) {
            assert.ok(typeof (transactions[i].date() !== 'undefined'));
            assert.ok(transactions[i].date() !== null);
        }
    });

    QUnit.test('should load data from a web service', function () {
        transactionService.prototype.loadTransactions = function () {
            return ko.observableArray([
                { date: '1/1/2013', datails: 'first', creditAmount: 10 },
                { date: '2/2/2013', details: 'second', debitAmount: 10 }
            ]);
        };

        //this call should use the fake transactionService
        var transactions = viewModel.transactions();

        QUnit.ok(transactions.length === 2, '');
    });

})();