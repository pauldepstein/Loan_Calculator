/**
 * ValidationError class that extends the built-in Error class.
 * 
 * This class provides an error with conditional logging to the console.
 */
export class ValidationError extends Error {
    /**
     * A flag that determines whether the error should be logged.
     */
    private logging: boolean;
  
    /**
     * Creates an instance of ValidationError.
     * 
     * @param message - The error message.
     * @param logging [logging=false] - A boolean flag indicating whether the error should be logged.
     */
    constructor(message: string, logging: boolean = false) {
      super(message);  
      this.name = this.constructor.name;
      this.logging = logging;
  
    // Log to console if not using a browser
    if (this.logging) {
            console.error(this.toString());  
        }
  
    }
  
    /**
     * Returns a string representation of the error.
     * 
     * @returns A string containing the name and message of the error.
     */
    toString(): string {
      return `${this.name}: ${this.message}`;
    }
  }
  

  