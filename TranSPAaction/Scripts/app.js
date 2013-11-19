require.config({    
    paths: {
        'ko': 'knockout-3.0.0'
    } 
});

require(['ko', 'transactions'], function (ko, vm) {
    ko.applyBindings(new vm());
});