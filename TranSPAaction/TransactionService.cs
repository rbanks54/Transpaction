using ServiceStack.ServiceInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Transpaction
{
    public class TransactionService : Service
    {
        public IList<Transaction> Get(TransactionRequest request)
        {
            var transactions = new List<Transaction>();
            for (int i = 0; i < 10; i++)
            {
                transactions.Add(new Transaction()
                {
                    Date = DateTime.Now.AddDays(i),
                    Details = "transaction " + i,
                    Credit = i,
                    Debit = 0
                });
            }
            return transactions;
        }
    }
}