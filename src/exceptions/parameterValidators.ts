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

import { ERROR_MESSAGES } from "./errorMessages";
import { ValidationError } from "./validationError";
import { displayError } from "./errorStringHandling";

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
        ? ERROR_MESSAGES.UNEXPECTED_NON_POSITIVE 
        : ERROR_MESSAGES.UNEXPECTED_NEGATIVE;

    const displayMessage = displayError(PARAM_NAME, errorMessage);

    if (rate < 0 || isZeroCase) {
        throw new ValidationError(displayMessage, logging);
    }
}

export { validateInterestRate };