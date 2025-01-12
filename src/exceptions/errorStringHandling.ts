function displayError(errorParam: string, errorMessage: string, logging = false): string {
    const ERROR_INDICATOR = "Error: ";
    const errorString = `${ERROR_INDICATOR}${errorParam}: \n${errorMessage}`;
    if (logging) {
        console.log(errorString);
    }
    return errorString;
}