export class EntityNotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class MissingParamError extends Error {
  constructor(message: string) {
    super(message);
  }
}