import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

function getValidationError(errors: ValidationError) {
  const validationError: Error = {};

  errors.inner.forEach(error => {
    validationError[error.path as any] = error.message;
  });

  return validationError;
}

export default getValidationError;
