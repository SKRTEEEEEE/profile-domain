
import { ErrorAppCodes } from "src/dynamic.types";
import { ErrorCodes } from "./error.type";
import { BaseFlow } from "./main.flow";

export abstract class DomainError extends Error implements BaseFlow {
  public readonly success: false = false;
  public readonly timestamp: number;
  public readonly meta?: Record<string, any>;

  constructor(
    message: string, 
    public readonly type: ErrorCodes | ErrorAppCodes, 
    public readonly location: string,
    public readonly opt?: {    
      readonly function?: string,
      readonly friendlyDesc?: string,
      readonly shortDesc?: string
    },
    // public readonly optionalMessage?: string,
    meta?: Record<string, any>
  ) {
    super(message);
    this.name = this.constructor.name;
    this.timestamp = Date.now();
    this.meta = meta;
  }
}

export class DatabaseActionError extends DomainError {
    constructor(
      action: string, 
      location:Function, 
      
      meta?:{
        entity?: string, 
        optionalMessage?: string,
        opt?:
        {    
          readonly function?: string,
          readonly friendlyDesc?: string,
          readonly shortDesc?: string

        }}
    ){
        super(
            meta?.entity?
            `Db ${action} (for ${meta.entity}) doesn't worked. ${meta?.optionalMessage ?? ""}`:
            `Db ${action} doesn't worked. ${meta?.optionalMessage ?? ""}`,
            ErrorCodes.DATABASE_ACTION,
            location.name,
            meta?.opt,
        )
    }
}
export class DatabaseFindError extends DomainError {
    constructor(
      action: string,
      location:Function, 
      meta?: {
        entity?: string, 
        optionalMessage?: string,
        opt?:
          {    
            readonly function?: string,
            readonly friendlyDesc?: string,
            readonly shortDesc?: string
          },
      }
    ){
        super(
            meta?.entity ? `Db ${action} (for ${meta.entity}) doesn't worked. ${meta?.optionalMessage ?? ""}`: `Db read ${action} doesn't worked. ${meta?.optionalMessage ?? ""}`,
            ErrorCodes.DATABASE_FIND,
            location.name, meta?.opt
        )
    }
}
export class SetEnvError extends DomainError {
    constructor(
      necessaryFor: string, 
      location:Function | "main.ts", 
      meta?:{
        variable?: string, 
        optionalMessage?: string,
        opt?:
        {    
          readonly function?: string,
          readonly friendlyDesc?: string,
          readonly shortDesc?: string
        },
      }
    
    ){
        super(
            meta?.variable?
            `EnvVariable ${meta.variable} necessary for ${necessaryFor}  doesn't set correctly`:
            `EnvVariable necessary for ${necessaryFor} doesn't set correctly`,
            ErrorCodes.SET_ENV,
            typeof location === 'string' ? location : location.name, meta?.opt
        )
    }
}

export class InputParseError extends DomainError {
  constructor(
    location:Function, 
     
    message?: string, 
    meta?: { 
      optionalMessage?: string, 
      opt?:
      {    
        readonly function?: string,
        readonly friendlyDesc?: string,
        readonly shortDesc?: string
      },}
  
  ) {
    super(
      message ? message : `Error at parse inputs. ${meta?.optionalMessage ?? ""}`,
      ErrorCodes.INPUT_PARSE,
      location.name, meta?.opt      
    );
  }
}
export class UnauthorizedError extends DomainError {
  constructor(
    location:Function, 
    message?: string, 
    meta?: { 
      optionalMessage?: string;  
      opt?:
      {    
        readonly function?: string,
        readonly friendlyDesc?: string,
        readonly shortDesc?: string
      },
    }) {
    super(
      message?`${message}. ${meta?.optionalMessage ?? ""}`:`Unauthorized. ${meta?.optionalMessage ?? ""}`,
      ErrorCodes.UNAUTHORIZED_ACTION,
      location.name, meta?.opt
    );
  }
}
export class NotImplementedError extends DomainError {
  constructor(
    location:Function, 
    message?: string, 
    meta?: { 
      opt?:
      {    
        readonly function?: string,
        readonly friendlyDesc?: string,
        readonly shortDesc?: string
      },
    }) {
    super(
      message?message:`Not Implemented error.`,
      ErrorCodes.NOT_IMPLEMENTED,
      location.name, meta?.opt
    );
  }
}

export class SharedActionError extends DomainError {
    constructor(
      action: string, 
      location:Function, 
      
      meta?:{
        entity?: string, 
        optionalMessage?: string,
        opt?:
        {    
          readonly function?: string,
          readonly friendlyDesc?: string,
          readonly shortDesc?: string

        }}
    ){
        super(
            meta?.entity?
            `Shared ${action} (for ${meta.entity}) doesn't worked. ${meta?.optionalMessage}`:
            `Shared ${action} doesn't worked. ${meta?.optionalMessage}`,
            ErrorCodes.SHARED_ACTION,
            location.name,
            meta?.opt,
        )
    }
}