/// <reference path="knockout-3.0.0.js" />
/// <reference path="qunit-1.12.0.js" />
/// <reference path="transactions.js" />
/// <reference path="services.js" />

define(['QUnit','transactions'], function (QUnit, transactionsModel) {
    var run = function () {
        var viewModel = {};
        QUnit.module('integration tests', {
            setup: function () {
                viewModel = new transactionsModel();
            }
        });

        QUnit.test('calls a non mocked function', function () {
            QUnit.strictEqual(viewModel.transactions().length, 1, 'The length should be 1.');
        });

        QUnit.test('should all have dates', function (assert) {
            var transactions = viewModel.transactions();
            for (var i = 0; i < transactions.length; i++) {
                assert.ok(typeof (transactions[i].date !== 'undefined'));
                assert.ok(transactions[i].date !== null);
            }
        });
    };
    return { run: run };
});
