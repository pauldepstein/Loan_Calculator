// Dependencies
const paramValidatorsPath = '../../../exceptions/parameterValidators';
// Validate amounts representing money
const validateAmountHandling = require(paramValidatorsPath).validateAmount; 

// Validate the parameters needed for the ratesPerPeriod function
const validateParamsHandling = require('./ratePerPeriod').validateParams;
const ratesPerPeriodHandling = require('./ratePerPeriod').ratesPerPeriod;

// Always use exports when using constants
const constantsFilePath = '../../../constants';
const MONTH_PAYMENTS = require(constantsFilePath).MONTHS_IN_YEAR;

/**
 * A utility function to validate the parameters of the loanPayments function.
 * @param {number} rate - The monthly interest rate.
 * @param {number} amount - The loan amount.
 * @param {number} periods - The number of payments.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * @throws {ValidationError} - If any of the parameters are invalid.
 */


function validateLoanParams(rate: number, amount: number, periods: number,  allowZero: boolean = true, logging: boolean = false): void{
    // First validate the parameters for the ratesPerPeriod function
    validateParamsHandling(rate, periods, allowZero, logging);
    // Validate the loan amount
    validateAmountHandling(amount, logging);
}

/**
 * Calculates the monthly payment for a loan in the simplest case.
 * Uses the formula: P = r * A / (1 - (1 + r)^-n) where:
 * - P is the monthly payment, and is the value to be calculated.
 * - r is the monthly interest rate.
 * - A is the loan amount.
 * - n is the number of payments.
 * 
 * @param {number} rate - The monthly interest rate.
 * @param {number} amount - The loan amount.
 * @param {number} periods - The number of payments.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 * @returns {number} The monthly payment.
 * 
 * @example
 * loanPayments(0.01, 5000, 12) = 444.24
 *
 * @note 
 * Parameters are validated -- they must all be positive and 
 * the number of payments must be an integer.
 * 
 * @see {@link https://financeformulas.net/Loan_Payment_Formula.html#calcHeader} 
 * to compare with third-party results
 */

function loanPayments(rate: number, amount: number, periods: number, allowZero: boolean = true): number{
    // Validate the parameters
    validateLoanParams(rate, amount, periods, allowZero);
    // Calculate the monthly payment using standard formula as adjusted in case the rate is zero
    const result = rate > 0 ? rate * amount / (1 - (1 + rate) ** -periods) : amount / periods;
    // Return the result, rounded to two decimal places
    return parseFloat(result.toFixed(2));
}
module.exports.loanPayments = loanPayments;

/**
 * Calculates the monthly payment for a loan in the case where annual interest rate is
 * given and the number of periods per year (typically monthly) is given.
 * Combines the ratesPerPeriod and loanPayments functions.
 * 
 * @param {number} rate - The annual interest rate.
 * @param {number} amount - The loan amount.
 * @param {number} periods - The total number of payments.
 * @param {number} [periodsPerYear=12] - The number of periods in a year.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 * @returns {number} The per-period payment (typically monthly).
 * 
 * @example
 * loanPaymentsMonthly(0.126825, 5000, 12) = 444.24
 *
 */

function loanPaymentsMonthly(rate: number, amount: number, periods: number, periodsPerYear: number = MONTH_PAYMENTS, allowZero: boolean = true): number{
    // Calculate the rate per period
    const ratePerPeriod = ratesPerPeriodHandling(rate, periodsPerYear, allowZero);
    // Calculate the per-period payment using the loanPayments function
    return loanPayments(ratePerPeriod, amount, periods, allowZero);
}
module.exports.loanPaymentsMonthly = loanPaymentsMonthly;