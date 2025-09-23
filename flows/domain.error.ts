import { ErrorAppCodes } from 'src/dynamic.types';
import { DomainErrorBase, ErrorCodes, ErrorMeta } from './error.type';
import { BaseFlow } from './main.flow';
import { IntlBase } from '../entities/intl.type';

export abstract class DomainError extends Error implements BaseFlow {
  public readonly success: false = false;
  public readonly timestamp: number;
  public readonly meta?: Record<string, any>;

  constructor(
    message: string,
    public readonly type: ErrorCodes | ErrorAppCodes,
    public readonly location: Function,
    public readonly func: string,
    public readonly friendlyDesc?: IntlBase,
    meta?: ErrorMeta,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.timestamp = Date.now();
    this.meta = meta;
  }
}

export class DatabaseActionError
  extends DomainError
  implements DomainErrorBase
{
  constructor(
    location: Function,
    func: string,
    friendlyDesc?: IntlBase,
    meta?: {
      readonly shortDesc?: string;
      readonly entity?: string;
      readonly optionalMessage?: string;
    },
  ) {
    super(
      meta?.entity
        ? `Db ${func} (for ${meta.entity}) doesn't worked. ${meta?.optionalMessage ?? ''}`
        : `Db ${func} doesn't worked. ${meta?.optionalMessage ?? ''}`,
      ErrorCodes.DATABASE_ACTION,
      location,
      func,
      friendlyDesc,
      meta,
    );
  }
}
export class DatabaseFindError extends DomainError implements DomainErrorBase {
  constructor(
    location: Function,
    func: string,
    friendlyDesc?: IntlBase,
    meta?: {
      entity?: string;
      optionalMessage?: string;
    },
  ) {
    super(
      meta?.entity
        ? `Db ${func} (for ${meta.entity}) doesn't worked. ${meta?.optionalMessage ?? ''}`
        : `Db read ${func} doesn't worked. ${meta?.optionalMessage ?? ''}`,
      ErrorCodes.DATABASE_FIND,
      location,
      func,
      friendlyDesc,
      meta,
    );
  }
}
export class SetEnvError extends DomainError implements DomainErrorBase {
  constructor(
    location: Function,
    func: string,
    friendlyDesc?: IntlBase,
    meta?: {
      readonly shortDesc?: string;
      readonly variable?: string;
      readonly optionalMessage?: string;
    },
  ) {
    super(
      meta?.variable
        ? `Env variable ${meta.variable} necessary for ${func} isn't set correctly. ${meta?.optionalMessage ?? ''}`
        : `Env variable necessary for ${func} isn't set correctly. ${meta?.optionalMessage ?? ''}`,
      ErrorCodes.SET_ENV,
      location,
      func,
      friendlyDesc,
      meta,
    );
  }
}

export class InputParseError extends DomainError implements DomainErrorBase {
  constructor(
    location: Function,
    func: string,
    friendlyDesc?: IntlBase,
    meta?: {
      readonly shortDesc?: string;
      readonly optionalMessage?: string;
    },
  ) {
    super(
      `Error parsing inputs. ${meta?.optionalMessage ?? ''}`,
      ErrorCodes.INPUT_PARSE,
      location,
      func,
      friendlyDesc,
      meta,
    );
  }
}
export class UnauthorizedError extends DomainError implements DomainErrorBase {
  constructor(
    location: Function,
    func: string,
    friendlyDesc?: IntlBase,
    meta?: {
      readonly shortDesc?: string;
      readonly optionalMessage?: string;
    },
  ) {
    super(
      `Unauthorized. ${meta?.optionalMessage ?? ''}`,
      ErrorCodes.UNAUTHORIZED_ACTION,
      location,
      func,
      friendlyDesc,
      meta,
    );
  }
}
export class NotImplementedError
  extends DomainError
  implements DomainErrorBase
{
  constructor(
    location: Function,
    func: string,
    friendlyDesc?: IntlBase,
    meta?: {
      readonly shortDesc?: string;
      readonly optionalMessage?: string;
    },
  ) {
    super(
      `Not Implemented. ${meta?.optionalMessage ?? ''}`,
      ErrorCodes.NOT_IMPLEMENTED,
      location,
      func,
      friendlyDesc,
      meta,
    );
  }
}

export class SharedActionError extends DomainError implements DomainErrorBase {
  constructor(
    location: Function,
    func: string,
    friendlyDesc?: IntlBase,
    meta?: {
      readonly shortDesc?: string;
      readonly entity?: string;
      readonly optionalMessage?: string;
    },
  ) {
    super(
      meta?.entity
        ? `Shared ${func} (for ${meta.entity}) didn't work. ${meta?.optionalMessage ?? ''}`
        : `Shared ${func} didn't work. ${meta?.optionalMessage ?? ''}`,
      ErrorCodes.SHARED_ACTION,
      location,
      func,
      friendlyDesc,
      meta,
    );
  }
}

export class ThrottleError extends DomainError implements DomainErrorBase {
  constructor(
    location: Function,
    func: string,
    friendlyDesc?: IntlBase,
    meta?: {
      readonly shortDesc?: string;
      readonly optionalMessage?: string;
    },
  ) {
    super(
      `Too many requests. ${meta?.optionalMessage ?? ''}`,
      ErrorCodes.THROTTLE,
      location,
      func,
      friendlyDesc,
      meta,
    );
  }
}
