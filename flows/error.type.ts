export enum ErrorCodes {
    DATABASE_ACTION = "DATABASE_ACTION",
    DATABASE_FIND = "DATABASE_FIND",
    INPUT_PARSE = "INPUT_PARSE",
    SET_ENV = "SET_ENV",
    UNAUTHORIZED_ACTION = "UNAUTHORIZED_ACTION",

    NOT_IMPLEMENTED = "NOT_IMPLEMENTED",
    SHARED_ACTION = "SHARED_ACTION"
}
export const errorCodeEmoji: Record<ErrorCodes, string> = {
  [ErrorCodes.DATABASE_ACTION]: '🧨',         // 500 - Acción de base de datos fallida
  [ErrorCodes.DATABASE_FIND]: '🔍',           // 404 - No encontrado
  [ErrorCodes.INPUT_PARSE]: '✏️',             // 400 - Error de entrada del usuario
  [ErrorCodes.SET_ENV]: '⚙️',                // 500 - Error de configuración del entorno
  [ErrorCodes.UNAUTHORIZED_ACTION]: '🔐' ,     // 401 - No autorizado

  [ErrorCodes.NOT_IMPLEMENTED]: '🚧', // 501
  [ErrorCodes.SHARED_ACTION]: '🖲️' // 502
}
export const apiErrorCodes = {
    enum: ErrorCodes,
    enumName: "ErrorCodes",
    description: "The response type in some app action",
    title: "Error Codes",
    example: ErrorCodes.NOT_IMPLEMENTED
}