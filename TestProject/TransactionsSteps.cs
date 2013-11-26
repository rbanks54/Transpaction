using System;
using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using TechTalk.SpecFlow;
using Transpaction;
using System.Linq;

namespace TestProject
{
    [Binding]
    public class TransactionsSteps
    {
        private TransactionService service;

        [Given(@"I have an account with (.*) transactions")]
        public void GivenIHaveAnAccountWithTransactions(int p0)
        {
            service = new TransactionService();
        }

        [When(@"I ask for all transactions")]
        public void WhenIAskForAllTransactions()
        {
            var result = service.Get(new TransactionRequest());
            ScenarioContext.Current.Add("result",result);
        }
        
        [Then(@"(.*) transactions should be returned")]
        public void ThenTransactionsShouldBeReturned(int p0)
        {
            var result = ScenarioContext.Current["result"]
                as IList<Transaction>;
            Assert.AreEqual(p0,result.Count());
        }
    }
}
