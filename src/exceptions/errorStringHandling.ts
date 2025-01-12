function displayError(errorParam: string, errorMessage: string): string {
    const ERROR_INDICATOR = "Error: ";
    const errorString = `${ERROR_INDICATOR}${errorParam}: \n${errorMessage}`;
    return errorString;
}