require.config({
    paths: {
        'QUnit': 'lib/qunit-1.12.0',
        'ko': 'lib/knockout-3.0.0',
        'Squire': 'lib/Squire'
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});

require(['QUnit', 'tests/integration', 'tests/mocks'], function (q, i, m) {
    i.run();
    m.run();
    q.load();
    q.start();
})