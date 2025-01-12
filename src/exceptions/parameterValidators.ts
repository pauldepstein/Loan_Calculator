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

const errorMessageHandling = require("./errorMessages");
const validationHandling = require("./validationError");
const errorHandling = require("./errorStringHandling");

let errors = errorMessageHandling.errorMessages;    


/**
 * Validates an interest rate.
 * Negative interest rates are not allowed. Zero interest rates are allowed by default 
 * but can be disallowed via a parameter.
 * 
 * @param {number} rate - The interest rate to validate.
 * @param {boolean} [logging=false] - Whether the error should be logged.
 * @param {boolean} [allowZero=true] - True if zero interest rates are allowed.
 * 
 * @throws {ValidationError} If the interest rate is negative or zero when disallowed.
 * 
 * @example
 * validateInterestRate(5); // Valid
 * validateInterestRate(-1); // Throws ValidationError
 * validateInterestRate(0, false, false); // Throws ValidationError
 */
function validateInterestRate(rate: number, logging: boolean = false, allowZero: boolean = true): void {
    const PARAM_NAME = "interest rate";

    const isZeroCase = rate === 0 && !allowZero;
    const errorMessage = isZeroCase 
        ? errors.UNEXPECTED_NON_POSITIVE 
        : errors.UNEXPECTED_NEGATIVE;

    const displayMessage = errorHandling.displayError(PARAM_NAME, errorMessage);

    if (rate < 0 || isZeroCase) {
        throw new validationHandling.ValidationError(displayMessage, logging);
    }
}
module.exports.validateInterestRate = validateInterestRate;