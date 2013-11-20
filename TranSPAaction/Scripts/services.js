'use strict';

define(['jquery'], function ($) {
    return function () {
        this.loadTransactions = function () {
            var deferred = $.Deferred();
            $.ajax('/transactions')
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