/**
 * Returns the error message for invalid input
 * @param {string} errorParam -- the parameter that caused the error
 * @param {string} errorMessage -- the error message for the parameter
 * @returns {string} -- the final error message
 */
function displayError(errorParam: string, errorMessage: string): string {
    const ERROR_INDICATOR = "Error: ";
    const errorString = `${ERROR_INDICATOR}${errorParam}: \n${errorMessage}`;
    return errorString;
}
module.exports.displayError = displayError;