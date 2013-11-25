define(['Squire', 'QUnit'], function (squire, q) {
    var run = function () {
        q.module('unit tests');
        var injector = new squire();

        var mockService = function () {
            var me = {};
            me.loadTransactions = function () {
                return [
                    { date: '1/1/2013', details: 'first', credit: 10, debit:undefined },
                    { date: '2/2/2013', details: 'second', debit: 10 , credit:0}
                ];
            };
            return me;
        };

        injector.mock('services', squire.Helpers.returns(new mockService()))
                .require(['transactions'], function (vm) {
                    var viewModel = new vm.transactionsViewModel();

                    q.test('should load data from a web service', function () {
                        //this call will use the fake transactionService
                        var transactions = viewModel.transactions();
                        q.strictEqual(transactions.length, 2, 'length should be 2');
                    });
                });
    };
    return { run: run };
});
