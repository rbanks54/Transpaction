/// <reference path="knockout-3.0.0.js" />
/// <reference path="qunit-1.12.0.js" />
/// <reference path="transactions.js" />

test('transaction viewmodel', function () {
    var viewModel = new transpaction.transactionsViewModel();
    QUnit.ok(viewModel.transactions().length === 2,'');
});