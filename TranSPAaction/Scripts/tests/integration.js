
define(['QUnit', 'transactions'], function (q, t) {
    var runFn = function() {
        var viewModel = {};

        q.module('tests needing a better name', {
            setup: function() {
                viewModel = new t.transactionsViewModel();
            }
        });

        q.test('more than one transaction', function() {
            q.ok(viewModel.transactions().length > 1, true, 'There should be more than 1 transaction.');
        });

        q.test('should all have dates', function() {
            var transactions = viewModel.transactions();
            for (var i = 0; i < transactions.length; i++) {
                q.ok(typeof(transactions[i].date()) !== 'undefined');
                q.ok(transactions[i].date !== null);
            }
        });
    };

    return { 'run': runFn };
});
