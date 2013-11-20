'use strict';

define(['jquery'], function ($) {
    return function () {
        var self = this;
        self.loadTransactions = function () {
            var deferred = $.Deferred();
            $.ajax({
                url: '/api/transactions',
                contentType: 'application/json'
            })
                .done(function(data) {
                    deferred.resolve(data);
                })
                .fail(function(response) {
                    console.log("fail!" + response);
                    deferred.reject(response);
                });
            return deferred;
        };
    };
});