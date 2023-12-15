"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = () => {
    const username = 'Ruben';
    const age = 31;
    const email = 'sample@mail.com';
    const validateUser = ({ username, age, email }) => {
        if (!username)
            throw new ValidationError('name is required');
        if (!age)
            throw new ValidationError('name is required');
        if (!email)
            throw new ValidationError('name is required');
        // Calling db type error
        try {
            //mongodb.connect();
        }
        catch (error) {
            // Don't send infrastructure errors to the client
            // Send to a internal service ie sendBeaconError(e)
            throw new ConnectionError('DB not available');
        }
    };
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ValidationError';
        }
    }
    class ConnectionError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ConnectionError';
        }
    }
    try {
        validateUser({ username, age, email });
    }
    catch (error) {
        if (error instanceof ConnectionError) {
            // Retry after a few seconds
            setTimeout(() => {
                validateUser({ username, age, email });
            }, 3000);
        }
        if (error instanceof ValidationError) {
            // show UI Error
            console.log('validation error');
        }
    }
};
exports.errorHandler = errorHandler;
