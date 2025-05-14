import { ErrorCodes } from "./error.codes";

export abstract class DomainError extends Error {
    constructor(message: string, public readonly code: ErrorCodes, public readonly optionalMessage?: string){
        super(optionalMessage?`${message} -> [${optionalMessage}]` : message)
        this.name = this.constructor.name;
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
    constructor(input_type: string, optionalMessage?: string){
        super(`${input_type} doesn't match the expected type`,
        ErrorCodes.INPUT_PARSE,
        optionalMessage
    )
    }
}