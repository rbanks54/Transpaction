using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace TranSPAaction
{
    public class TransactionHub : Hub
    {
        public void SendUpdate(string transaction)
        {
            var value = new Random(DateTime.Now.Millisecond).Next() % 100;
            Clients.All.broadcastMessage(DateTime.Now.AddDays(value), transaction, 10+value, 10-value);
        }
    }
}