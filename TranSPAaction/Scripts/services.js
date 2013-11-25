define([], function () {
    var me = {};

    me.loadTransactions = function () {
        return [{ date: '1/1/2013', details: 'first', credit: 10, debit: undefined },
            { date: '2/1/2013', details:'second', credit:0, debit:10 }];
    };

    return me;
});