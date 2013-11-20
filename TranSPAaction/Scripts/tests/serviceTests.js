define(['QUnit', 'services'], function (QUnit, service) {
    var run = function () {
        QUnit.module('service tests');

        var server = sinon.fakeServer.create();

        var resultData = [
            { date: '1/1/2013', datails: 'first', creditAmount: 10 },
            { date: '2/2/2013', details: 'second', debitAmount: 10 }
        ];

        server.respondWith('GET', '//transactions',
            function (xhr) {
                xhr.respond(200, { "Content-Type": "application/json" },
                        JSON.stringify(resultData));
            });

        var dataService = new service();

        QUnit.asyncTest('should load data from a stubbed out REST service', function () {
            var result = dataService.loadTransactions();
            server.respond();
            QUnit.start();
            QUnit.strictEqual(result.length, 2, 'length should be 2');
        });

    };
    return { run: run };
});
