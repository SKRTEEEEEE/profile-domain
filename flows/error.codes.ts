export enum ErrorCodes {
    DATABASE_ACTION = "DATABASE ACTION",
    DATABASE_FIND = "DATABASE FIND",
    INPUT_PARSE = "INPUT PARSE",
    SET_ENV = "SET ENV",
    UNAUTHORIZED_ACTION = "UNAUTHORIZED ACTION",

    NOT_IMPLEMENTED = "NOT IMPLEMENTED",
    SHARED_ACTION = "SHARED ACTION"
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
