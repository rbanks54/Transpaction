using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.ServiceHost;

namespace TranSPAaction.api
{
    [Route("/transactions")]
    public class TransactionRequest : IReturn<IList<Transaction>>
    {
    }
}