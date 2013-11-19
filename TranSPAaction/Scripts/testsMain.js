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
    ['QUnit', 'tests'],
    function (QUnit, tests) {
        tests.run();
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);
