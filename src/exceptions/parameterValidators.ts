/**
 * @file Functions for parameter validations.
 * 
 * This file provides utility functions for checking that parameters 
 * make sense. For example, interest rates should be non-negative,
 * and the number of periods should be integral and positive.
 *
 * @author Paul Epstein
 * @version 1.0.0
 * @date 2025-01-12
 */

// Dependencies
const errorMessageHandling = require("./errorMessages");
const validationHandling = require("./validationError");
const errorHandling = require("./errorStringHandling");

let errors = errorMessageHandling.errorMessages;    
let display = errorHandling.displayError;
let validationFailure = validationHandling.ValidationError;


/**
 * Validates an interest rate.
 * Negative interest rates are not allowed. Zero interest rates are allowed by default 
 * but can be disallowed via a parameter.
 * 
 * @param {number} rate - The interest rate to validate.
 * @param {boolean} [allowZero=true] - Whether zero interest rates are allowed.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * @throws {ValidationError} If the interest rate is negative or zero when disallowed.
 * 
 * @example
 * validateInterestRate(5); // Valid
 * validateInterestRate(-1); // Throws ValidationError
 * validateInterestRate(0, false, false); // Throws ValidationError
 */
function validateInterestRate(rate: number, allowZero: boolean = true, logging: boolean = false): void {
    const PARAM_NAME = "interest rate";
    const isZeroCase = rate === 0 && !allowZero;
    const errorMessage = isZeroCase 
        ? errors.UNEXPECTED_NON_POSITIVE 
        : errors.UNEXPECTED_NEGATIVE;

    const displayMessage = display(PARAM_NAME, errorMessage);

    if (rate < 0 || isZeroCase) {
        throw new validationFailure(displayMessage, logging);
    }
}
module.exports.validateInterestRate = validateInterestRate;

/**
 * Small utility function to flag numbers which are not positive.
 * @param {string} paramName - The name of the parameter.
 * @param {number} posAmount - The amount which should be positive.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * @throws {ValidationError} - Error message for the parameter.
 */
function negativeError(paramName: string, posAmount: number, logging: boolean = false): void {
    if (posAmount <= 0) {
        const ERROR_MESSAGE = display(paramName, errors.UNEXPECTED_NON_POSITIVE);
        throw new validationFailure(ERROR_MESSAGE, logging);
    }
}

/**
 * Validates a number of periods -- commonly used in interest computations
 * The number of periods must be an integer >= 1.
 * 
 * @param {number} periods - Validate the number of periods.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * 
 * @throws {ValidationError} - Error if periods is non-positive or fractional.
 * 
 * @example
 * validateNumPeriods(5); // Valid
 * validateNumPeriods(0); // Throws ValidationError
 * validateNumPeriods(2.5); // Throws ValidationError
 */
function validateNumPeriods(periods: number, logging: boolean = false): void {
    const PARAM_NAME = "number of periods";
    const fractionErrorMessage = errors.UNEXPECTED_FRACTION;
    const fractionDisplay = display(PARAM_NAME, fractionErrorMessage);

    negativeError(PARAM_NAME, periods, logging);
    if (!Number.isInteger(periods)) {
        throw new validationFailure(fractionDisplay, logging);
    }
}
module.exports.validateNumPeriods = validateNumPeriods;

/**
 * Validate a currency amount.
 * In normal circumstances, currency amounts should be positive.
 * 
 * @param {number} amount - Currency in any denomination.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * 
 * @throws {ValidationError} - Error if amount is non-positive.
 * 
 * @example
 * validateAmount(5.5); // Valid
 * validateAmount(0); // Throws ValidationError
 * validateAmount(-2.5); // Throws ValidationError
 */
function validateAmount(amount: number, logging: boolean = false): void {
    negativeError("amount", amount, logging);
}
module.exports.validateAmount = validateAmount;