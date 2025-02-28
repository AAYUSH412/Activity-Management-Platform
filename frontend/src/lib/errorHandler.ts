export class FormError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FormError';
  }
}

export const handleFormError = (error: unknown) => {
  if (error instanceof FormError) {
    return error.message;
  }
  return 'An unexpected error occurred';
};
