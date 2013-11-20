require.config({
    paths: {
        'QUnit': 'qunit-1.12.0',
        'ko': 'knockout-3.0.0',
        'jquery': 'jquery-2.0.3'
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

//require(['QUnit', 'tests/integration','tests/mocks', 'tests/serviceTests'],
//function (QUnit, integration, mocks, serviceTests) {
require(['QUnit', 'tests/serviceTests'],
    function (QUnit, serviceTests) {
        //integration.run();
        //mocks.run();
        serviceTests.run();
        QUnit.load();
        QUnit.start();
    }
);
