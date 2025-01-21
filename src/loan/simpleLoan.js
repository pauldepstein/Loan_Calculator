// File for the class of the simplest loan possible -- a constant payment each period with no down payment.
// Define the SimpleLoan class
function SimpleLoan(annualRate, amount, numPayments, periodsPerYear) {
    this.annualRate = annualRate;
    this.amount = amount;
    this.numPayments = numPayments;
    this.periodsPerYear = periodsPerYear || 12;  // Default to 12 months

}

// Implement the calculatePayment method for SimpleLoan
SimpleLoan.prototype.calculatePayment = function() {
    // Formula for monthly simple interest loan payment
    return LoanPayments.loanPaymentsMonthly(this.annualRate, this.amount, this.numPayments, this.periodsPerYear);
};

