using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;
using TechTalk.SpecFlow;
using TranSPAaction.api;

namespace Tests.specs
{
    [Binding]
    public class ApiStepDefinitions
    {
        TransactionService service;

        [Given(@"I have a valid account with (.*) transactions in it")]
        public void GivenIHaveAValidAccountWithTransactionsInIt(int p0)
        {
            service = new TransactionService();
        }

        [When(@"I ask for all transactions")]
        public void WhenIAskForAllTransactions()
        {
            var result = service.Get(new TransactionRequest());
            ScenarioContext.Current.Add("result", result);
        }

        [Then(@"a list containing (.*) transactions should be returned")]
        public void ThenAListContainingTransactionsShouldBeReturned(int p0)
        {
            var result = (IEnumerable<Transaction>) ScenarioContext.Current["result"];

            Assert.AreEqual(p0, result.Count());
        }

    }
}
