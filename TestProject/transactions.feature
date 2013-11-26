Feature: transactions
	As an account holder
	I want to see all my transactions
	So I can balance my books

Scenario: Shows all transactions
	Given I have an account with 10 transactions
	When I ask for all transactions
	Then 10 transactions should be returned
