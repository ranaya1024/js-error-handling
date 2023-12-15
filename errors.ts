/**const createErrorFactory = function (errorName: string) {
  return class BusinessError extends Error {
    constructor(message: string) {
      super(message);
      this.name = errorName;
    }
  };
};

export const ConnectionError = createErrorFactory('ConnectionError');
export const ValidationError = createErrorFactory('ValidationError');**/

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
    // Overwrite stack so it shows empty stack trace
    // this.stack = '';
  }
}

export class ConnectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConnectionError';
  }
}
