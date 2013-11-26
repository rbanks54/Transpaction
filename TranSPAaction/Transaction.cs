using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.ServiceHost;

namespace Transpaction
{
    public class Transaction
    {
        public DateTime Date { get; set; }
        public String Details { get; set; }
        public decimal Credit { get; set; }
        public decimal Debit { get; set; }
    }

    [Route("/transactions")]
    public class TransactionRequest : IReturn<IList<Transaction>> 
    {
        
    }
}