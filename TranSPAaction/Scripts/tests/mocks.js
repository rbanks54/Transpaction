/// <reference path="knockout-3.0.0.js" />
/// <reference path="qunit-1.12.0.js" />
/// <reference path="transactions.js" />
/// <reference path="services.js" />

define(['Squire', 'QUnit'], function (squire, QUnit) {
    var run = function () {
        QUnit.module('unit tests');

        var injector = new squire();

        var mockService = function () {
            this.loadTransactions = function () {
                var testData = [
                    { date: '1/1/2013', datails: 'first', creditAmount: 10 },
                    { date: '2/2/2013', details: 'second', debitAmount: 10 }
                ];
                return {
                    done: function(callback) {
                        callback(testData);
                    }
                };
            };
        };

        injector.mock('services', squire.Helpers.returns(mockService))
                .require(['transactions'], function (transactionsModel) {
                    var viewModel = new transactionsModel();

                    QUnit.test('should load data from a fake web service', function () {
                        var transactions = viewModel.transactions();
                        QUnit.strictEqual(transactions.length, 2, 'length should be 2');
                    });
                });
    };
    return { run: run };
});
