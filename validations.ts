import { ConnectionError, ValidationError } from './errors';
import { User } from './types';

export const validateUser = ({ username, age, email }: User) => {
  if (!username) throw new ValidationError('name is required');
  if (!age) throw new ValidationError('name is required');
  if (!email) throw new ValidationError('name is required');

  // Calling db type error
  try {
    //mongodb.connect();
  } catch (error) {
    // Don't send infrastructure errors to the client
    // Send to a internal service ie sendBeaconError(e)
    throw new ConnectionError('DB not available');
  }
};
