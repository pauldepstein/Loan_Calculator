/**
 * @file Functions for parameter validations.
 * 
 * This file provides utility functions for checking that parameters 
 * make sense. For example, interest rates should be non-negative,
 * and the number of periods should be integral and positive.
 *
 * @author Paul Epstein
 * @version 1.0
 * @date 2025-01-18
 */

// Dependencies
/// <reference path="errorStringHandling.ts" />
/// <reference path="validationError.ts" />

namespace ParameterValidators {
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
export function validateInterestRate(rate: number, allowZero: boolean = true, logging: boolean = false): void {
    const PARAM_NAME = "interest rate";
    const isZeroCase = rate === 0 && !allowZero;
    const errorMessage = isZeroCase 
        ? ERROR_MESSAGES.ERROR_MESSAGES.UNEXPECTED_NON_POSITIVE
        : ERROR_MESSAGES.ERROR_MESSAGES.UNEXPECTED_NEGATIVE;

    const displayMessage = ErrorStringHandling.displayError(PARAM_NAME, errorMessage);

    if (rate < 0 || isZeroCase) {
        throw new ValidateError.ValidationError(displayMessage, logging);
    }
}

/**
 * Small utility function to flag numbers which are not positive.
 * @param {string} paramName - The name of the parameter.
 * @param {number} posAmount - The amount which should be positive.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * @throws {ValidationError} - Error message for the parameter.
 */
export function negativeError(paramName: string, posAmount: number, logging: boolean = false): void {
    if (posAmount <= 0) {
        const ERROR_MESSAGE = ErrorStringHandling.displayError(paramName, ERROR_MESSAGES.ERROR_MESSAGES.UNEXPECTED_NON_POSITIVE);
        throw new ValidateError.ValidationError(ERROR_MESSAGE, logging);
    }
}

/**
 * Validates a number of periods -- commonly used in interest computations
 * The number of periods must be an integer >= 1.
 * Also validates the number of periods in a year (typically 12 for monthly payments).
 * 
 * @param {number} periods - The number of periods or the number of periods-per-year
 * @param {boolean} [isPeriodsPerYear=false] - True if the number of periods in a year is being validated
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * 
 * @throws {ValidationError} - Error if periods is non-positive or fractional.
 * 
 * @example
 * validateNumPeriods(5); // Valid
 * validateNumPeriods(0); // Throws ValidationError
 * validateNumPeriods(-1); // Throws ValidationError
 * validateNumPeriods(2.5); // Throws ValidationError
 */
export function validateNumPeriods(periods: number, isPeriodsPerYear: boolean = false, logging: boolean = false): void {
    let PARAM_NAME = "number of periods";
    if (isPeriodsPerYear) {
        PARAM_NAME += " per year";
    }
    const fractionErrorMessage = ERROR_MESSAGES.ERROR_MESSAGES.UNEXPECTED_FRACTION;
    const fractionDisplay = ErrorStringHandling.displayError(PARAM_NAME, fractionErrorMessage);

    negativeError(PARAM_NAME, periods, logging); // Error for negative periods

    if (!Number.isInteger(periods)) {
        throw new ValidateError.ValidationError(fractionDisplay, logging);
    }
}

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
export function validateAmount(amount: number, logging: boolean = false): void {
    negativeError("amount", amount, logging);
}
}