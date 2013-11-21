require.config({
    paths: {
        'ko': 'knockout-3.0.0',
        'jquery': 'jquery-2.0.3',
        'signalr': 'jquery.signalR-2.0.0',
        'hubs': '/signalr/hubs?'
    },
    shim: {
        'signalr': {
            deps: ['jquery'],
            exports: 'signalr'
        },
        'hubs' : {
            deps: ['signalr']
        }
    }
});

require(['ko', 'transactions','jquery'], function (ko, vm) {
    $(function() {
        ko.applyBindings(new vm());
    });
});