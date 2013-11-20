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
            return new List<Transaction>();
        }
    }
}