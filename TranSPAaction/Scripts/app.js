require.config({
    paths: {
        'ko': 'lib/knockout-3.0.0'
    }
});
    
require(['ko', 'transactions'], function (ko, trans) {
    ko.applyBindings(new trans.transactionsViewModel());
});