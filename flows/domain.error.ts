import { ErrorCodes } from "./error.codes";
import { BaseFlow } from "./main.flow";

export abstract class DomainError extends Error implements BaseFlow {
  public readonly success: false = false;
  public readonly timestamp: number;
  public readonly meta?: Record<string, any>;

  constructor(
    message: string, 
    public readonly type: ErrorCodes, 
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
    constructor(action: string, opt?:{entitie?: string, optionalMessage?: string}){
        super(
            opt?.entitie?
            `Action: ${action} in Database (for ${opt.entitie}) doesn't worked`:
            `Action: ${action} in Database doesn't worked`,
            ErrorCodes.DATABASE_ACTION,
            opt?.optionalMessage
        )
    }
}
export class SetEnvError extends DomainError {
    constructor(necessaryFor: string, opt?:{variable?: string, place?: string, optionalMessage?: string}){
        super(
            opt?.variable?
            `EnvVariable: ${opt.variable} necessary for ${necessaryFor} (in ${opt.place ? opt.place : "[undefined]"}) doesn't set correctly`:
            `EnvVariable: necessary for ${necessaryFor} doesn't set correctly`,
            ErrorCodes.SET_ENV,
            opt?.optionalMessage
        )
    }
}
export class DatabaseFindError extends DomainError {
    constructor(opt?: {entitie?: string, optionalMessage?: string}){
        super(
            `Not found in database(${opt?.entitie})`,
            ErrorCodes.DATABASE_FIND,
            opt?.optionalMessage
        )
    }
}
export class InputParseError extends DomainError {
  constructor(message: string, opt?: { optionalMessage?: string; meta?: Record<string, any> }) {
    super(
      message,
      ErrorCodes.INPUT_PARSE,
      opt?.optionalMessage,
      opt?.meta
    );
  }
}