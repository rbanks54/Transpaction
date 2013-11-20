using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.ServiceInterface;

namespace TranSPAaction.api
{
    public class TransactionService : Service
    {
        public IList<Transaction> Get(TransactionRequest request)
        {
            var transactions = new List<Transaction>();
            for (int i = 1; i < 30; i++)
            {
                transactions.Add(new Transaction()
                {
                    Date = DateTime.Now.AddDays(i),
                    Details = "Transaction " + i,
                    CreditAmount = 10 + i,
                    DebitAmount = 10 - i
                });
            }
            return transactions;
        }
    }
}