using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TranSPAaction.api
{
    public class Transaction
    {
        public DateTime Date { get; set; }
        public string Details { get; set; }
        public int CreditAmount { get; set; }
        public int DebitAmount { get; set; }
    }
}