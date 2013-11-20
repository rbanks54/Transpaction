require.config({    
    paths: {
        'ko': 'knockout-3.0.0',
        'jquery': 'jquery-2.0.3'
    }
});

require(['ko', 'transactions'], function (ko, vm) {
    ko.applyBindings(new vm());
});