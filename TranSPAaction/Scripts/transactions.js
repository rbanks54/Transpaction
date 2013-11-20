/// <reference path="require.js" />
/// <reference path="knockout-3.0.0.js" />
'use strict';

define(['ko', 'services'], function(ko, service) {
    return function () {
        var self = this;
        var svc = new service();

        var refresh = function (data) {
            self.transactions(data);
        };

        self.transactions = ko.observableArray([]);
        svc.loadTransactions().done(refresh);

    };
});

