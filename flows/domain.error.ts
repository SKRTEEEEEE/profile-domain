
import { ErrorAppCodes } from "src/dynamic.types";
import { ErrorCodes } from "./error.codes";
import { BaseFlow } from "./main.flow";

export abstract class DomainError extends Error implements BaseFlow {
  public readonly success: false = false;
  public readonly timestamp: number;
  public readonly meta?: Record<string, any>;

  constructor(
    message: string, 
    public readonly type: ErrorCodes | ErrorAppCodes, 
    public readonly optionalMessage?: string,
    meta?: Record<string, any>
  ) {
    super(optionalMessage ? `${message} -> [${optionalMessage}]` : message);
    this.name = this.constructor.name;
    this.timestamp = Date.now();
    this.meta = meta;
  }
}

export class DatabaseActionError extends DomainError {
    constructor(action: string, meta?:{entitie?: string, optionalMessage?: string}){
        super(
            meta?.entitie?
            `Action: ${action} in Database (for ${meta.entitie}) doesn't worked`:
            `Action: ${action} in Database doesn't worked`,
            ErrorCodes.DATABASE_ACTION,
            meta?.optionalMessage
        )
    }
}
export class SetEnvError extends DomainError {
    constructor(necessaryFor: string, meta?:{variable?: string, place?: string, optionalMessage?: string}){
        super(
            meta?.variable?
            `EnvVariable: ${meta.variable} necessary for ${necessaryFor} (in ${meta.place ? meta.place : "[undefined]"}) doesn't set correctly`:
            `EnvVariable: necessary for ${necessaryFor} doesn't set correctly`,
            ErrorCodes.SET_ENV,
            meta?.optionalMessage
        )
    }
}
export class DatabaseFindError extends DomainError {
    constructor(meta?: {entitie?: string, optionalMessage?: string}){
        super(
            `Not found in database(${meta?.entitie})`,
            ErrorCodes.DATABASE_FIND,
            meta?.optionalMessage
        )
    }
}
export class InputParseError extends DomainError {
  constructor(message: string, meta?: { optionalMessage?: string;  }) {
    super(
      message,
      ErrorCodes.INPUT_PARSE,
      meta?.optionalMessage,
      
    );
  }
}
export class UnauthorizedError extends DomainError {
  constructor(message: string, meta?: { optionalMessage?: string;  }) {
    super(
      message,
      ErrorCodes.UNAUTHORIZED_ACTION,
      meta?.optionalMessage,
    );
  }
}