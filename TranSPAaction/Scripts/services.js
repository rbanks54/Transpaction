define(['jquery'], function ($) {
    'use strict';
    var me = {};

    me.loadTransactions = function () {
        var deferred = $.Deferred;

        $.ajax('/transactions')
            .done(function (data) {
                deferred.resolve(data);
            })
            .fail(function (response) {
                console.log('oops!');
                deferred.reject(response);
            });

        return deferred;
    };

    return me;
});