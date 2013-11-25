require.config({
    paths: {
        'ko': 'lib/knockout-3.0.0',
        'jquery': 'lib/jquery-2.0.3'
    }
});
    
require(['ko', 'transactions'], function (ko, trans) {
    ko.applyBindings(new trans.transactionsViewModel());
});