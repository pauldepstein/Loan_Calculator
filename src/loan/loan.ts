// An abstract base class for all types of loans
abstract class Loan {
    protected amount: number; // The amount of the loan
    protected annualRate: number; // The annual interest rate
    protected numPayments: number;  // The number of payments
  
    constructor(amount: number, annualRate: number, numPayments: number) {
      this.amount = amount;
      this.annualRate = annualRate;
      this.numPayments = numPayments;
    }
  
    // Abstract method for calculating the loan payment
    abstract calculatePayment(): number;
  }
  module.exports.Loan = Loan;