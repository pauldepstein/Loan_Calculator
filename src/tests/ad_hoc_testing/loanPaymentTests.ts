// Purpose: ad hoc testing of the loan payments function for a simple monthly loan.
const successMessage = 'The test passed successfully!';
const failureMessage = 'The test failed!';
const ValidationFailureHandling = require('../../exceptions/validationError').ValidationError;
const loanPaymentsTest = require('../../computations/financial_computations/interest_computations/loanPayment').loanPayments;

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
    const result = loanPaymentsTest(0.1, -5000, 12);
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
