require.config({
    paths: {
        'QUnit': 'qunit-1.12.0',
        'ko' : 'knockout-3.0.0'
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

require(
    ['QUnit', 'tests/integration','tests/mocks'],
    function (QUnit, integration, mocks) {
        integration.run();
        mocks.run();
        QUnit.load();
        QUnit.start();
    }
);
