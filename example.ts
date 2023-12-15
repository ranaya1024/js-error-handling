import { ConnectionError, ValidationError } from './errors';
import { validateUser } from './validations';

export const errorHandler = () => {
  const username = '';
  const age = 31;
  const email = undefined;

  try {
    validateUser({ username, age, email });
  } catch (error: unknown) {
    if (error instanceof ConnectionError) {
      // Retry after a few seconds
      setTimeout(() => {
        validateUser({ username, age, email });
      }, 3000);
    }

    if (error instanceof ValidationError) {
      // show UI Error
    }
  }
};
