
define(['QUnit', 'transactions'], function (q, t) {
    var runFn = function() {
        var viewModel = {};

        q.module('tests needing a better name', {
            setup: function() {
                viewModel = new t.transactionsViewModel();
            }
        });

        q.asyncTest('more than one transaction', function () {
            var transactions = viewModel.transactions();
            q.start();
            q.ok(transactions.length > 1, true, 'There should be more than 1 transaction.');
        });

        q.asyncTest('should all have dates', function() {
            var transactions = viewModel.transactions();
            q.start();
            for (var i = 0; i < transactions.length; i++) {
                q.ok(typeof(transactions[i].date()) !== 'undefined');
                q.ok(transactions[i].date !== null);
            }
        });
    };

    return { 'run': runFn };
});
