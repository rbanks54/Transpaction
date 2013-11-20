Feature: Transaction_Listing
As an account holder
I want to see a list of transactions in my account
So I can balance my account

Scenario: See_all_transactions
Given I have a valid account with 2 transactions in it
When I ask for all transactions
Then a list containing 2 transactions should be returned