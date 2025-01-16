// Purpose: ad hoc testing of the loan payments function for a simple monthly loan.
// Dependencies
const ValidationFailureHandling = require('../../exceptions/validationError').ValidationError;
const loanPaymentsTest = require('../../computations/financial_computations/interest_computations/loanPayment').loanPayments;
const loanPaymentsMonthlyTest = require('../../computations/financial_computations/interest_computations/loanPayment').loanPaymentsMonthly;

const successMessage = 'The test passed successfully!';
const failureMessage = 'The test failed!';
// Test cases
try {
  console.log('Testing loan payment for an amount of 5000, with a monthly interest rate of 1%, and 12 payments:');
  const result = loanPaymentsTest(0.01, 5000, 12);
  const expected = 444.24; // Expected result from financeformulas.net
  const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
  console.log(report);

  {
  console.log('Testing loan payment for an amount of 5000, with a monthly interest rate of 0%, and 12 payments:');
  const result = loanPaymentsTest(0, 5000, 12);
  console.log(result);
  const expected = 416.67; // Simply 5000 / 12 because there is no interest.
  const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
  console.log(report);
  }

  {
    console.log('Testing an exceptions case with a negative amount of money:');
    const result = loanPaymentsTest(0.1, -5000, 12); // result creates an exception which is caught
  }

}
  catch (error: any) {
  if (error instanceof ValidationFailureHandling) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
    
  }
}

try {
  // For the monthly version of the loan payments function, same values are used as in the previous test,
  // but the interest rate is yearly and the payments are monthly.
  console.log('Now testing calculations with a yearly interest rate and monthly payments:');
  console.log('Testing loan payment for an amount of 5000, with a yearly interest of 12.68%, and 12 payments:');
  const result = loanPaymentsMonthlyTest(0.126825, 5000, 12);
  const expected = 444.24; // Expected to match the previous test
  const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
  console.log(report);

  {
  console.log('Testing loan payment for an amount of 5000, with a monthly interest rate of 0%, and 12 payments:');
  const result = loanPaymentsMonthlyTest(0, 5000, 12, 12);
  console.log(result);
  const expected = 416.67; // Simply 5000 / 12 because there is no interest.
  const report = Math.abs(result - expected) < 0.01 ? successMessage : failureMessage;
  console.log(report);
  }

  {
    console.log('Testing an exceptions case with a negative amount of money:');
    const result = loanPaymentsMonthlyTest(0.1, -5000, 12); // result creates an exception which is caught
  }

}
  catch (error: any) {
  if (error instanceof ValidationFailureHandling) {
    console.log(`Caught expected error: ${error.message}`);
  } else {
    console.log(`Unexpected error: ${error}`);
    console.log(typeof error);
    
  }
}