// Purpose: ad hoc testing of the loan payments function for a simple monthly loan.
// Dependencies
/// <reference path="../../computations/financial_computations/interest_computations/loanPayment.ts" />
// Test cases
const successMessage = 'Test passed';
const failureMessage = 'Test failed';

{
console.log('Testing loan payment for an amount of 5000, with a monthly interest rate of 1%, and 12 payments:');
const result = LoanPayments.loanPayments(0.01, 5000, 12);
const expected = 444.24; // Expected result from financeformulas.net
const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
console.log ("Result: " + result)
console.log(report);
}

{
  console.log('Testing loan payment for an amount of 5000, with a monthly interest rate of 0%, and 12 payments:');
  const result = LoanPayments.loanPayments(0, 5000, 12);
  console.log ("Result: " + result)
  const expected = 416.67; // Simply 5000 / 12 because there is no interest.
  const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
  console.log(report);
}

{
  // For the monthly version of the loan payments function, same values are used as in the previous test,
  // but the interest rate is yearly and the payments are monthly.
  console.log('Now testing calculations with a yearly interest rate and monthly payments:');
  console.log('Testing loan payment for an amount of 5000, with a yearly interest of 12.68%, and 12 payments:');
  const result = LoanPayments.loanPaymentsMonthly(0.126825, 5000, 12);
  console.log ("Result: " + result)
  const expected = 444.24; // Expected to match the previous test
  const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
  console.log(report);
}

{
  console.log('Testing loan payment for an amount of 5000, with a monthly interest rate of 0%, and 12 payments:');
  const result = LoanPayments.loanPaymentsMonthly(0, 5000, 12, 12);
  console.log ("Result: " + result)
  const expected = 416.67; // Simply 5000 / 12 because there is no interest.
  const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
  console.log(report);
}

