define(['QUnit', 'services'], function (QUnit, service) {
    var run = function() {
        var server = {};
        var resultData = [
            { date: '1/1/2013', datails: 'first', creditAmount: 10 },
            { date: '2/2/2013', details: 'second', debitAmount: 10 }
        ];
        var dataService = new service();

        QUnit.module('service tests', {
            setup: function () {
                server = sinon.fakeServer.create();
                server.respondWith(
                    'GET',
                    '/transactions',
                    [200, { "Content-Type": "application/json" }, JSON.stringify(resultData)]
                    );
            },
            teardown: function () {
                server.restore();
            }
        });

        QUnit.asyncTest('should load data from a stubbed out REST service', function () {
            dataService.loadTransactions().done(function (result) {
                QUnit.ok(result.length > 1, 'length should be more than 1');
            });
            server.respond();
            QUnit.start();
        });

    };
    return { run: run };
});
