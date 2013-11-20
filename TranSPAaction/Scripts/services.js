'use strict';

define(['jquery'], function ($) {
    return function () {
        this.loadTransactions = function () {
            $.ajax('//transactions')
            .done(function (data) {
                return data;
            });
        };
    };
});