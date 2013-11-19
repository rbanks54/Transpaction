/// <reference path="require.js" />
/// <reference path="knockout-3.0.0.js" />
'use strict';

define(['ko', 'services'], function(ko, service) {
    return function () {
        var svc = new service();
        var data = svc.loadTransactions();
        this.transactions = ko.observableArray(data);
    };
});

