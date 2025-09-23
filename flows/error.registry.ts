import { ErrorCodes, ErrorMeta } from './error.type';
import type { DomainError } from './domain.error';
import {
  DatabaseActionError,
  DatabaseFindError,
  InputParseError,
  NotImplementedError,
  SetEnvError,
  SharedActionError,
  ThrottleError,
  UnauthorizedError,
} from './domain.error';
import { IntlBase } from '../entities/intl.type';

export type DomainErrorCtor = new (
  location: Function,
  func: string,
  friendlyDesc?: IntlBase,
  meta?: ErrorMeta,
) => DomainError;

export const ERROR_CLASS_REGISTRY = {
  [ErrorCodes.DATABASE_ACTION]: DatabaseActionError,
  [ErrorCodes.DATABASE_FIND]: DatabaseFindError,
  [ErrorCodes.INPUT_PARSE]: InputParseError,
  [ErrorCodes.SET_ENV]: SetEnvError,
  [ErrorCodes.THROTTLE]: ThrottleError,
  [ErrorCodes.UNAUTHORIZED_ACTION]: UnauthorizedError,
  [ErrorCodes.NOT_IMPLEMENTED]: NotImplementedError,
  [ErrorCodes.SHARED_ACTION]: SharedActionError,
} satisfies Record<ErrorCodes, DomainErrorCtor>;

export function createDomainError(
  code: ErrorCodes,
  location: Function,
  func: string,
  friendlyDesc?:
    | IntlBase
    | 'tryAgainOrContact'
    | 'd'
    | 'credentials'
    | 'credentials--mock',
  meta?: ErrorMeta,
  friendlyHeader?: 'ups',
): DomainError {
  const Ctor = ERROR_CLASS_REGISTRY[code];
  if (friendlyDesc === 'tryAgainOrContact') {
    return new Ctor(
      location,
      func,
      {
        es: 'Inténtalo de nuevo más tarde o contáctanos si persiste',
        en: 'Try again after or contact us if persist',
        ca: "Torna-ho a provar més tard o contacta'ns si persisteix",
        de: 'Versuche es später erneut oder kontaktiere uns, falls das Problem weiterhin besteht',
      },
      meta,
    );
  } else if (friendlyDesc === 'd') {
    return new Ctor(
      location,
      func,
      {
        es: 'Inténtalo de nuevo más tarde o contáctanos si persiste',
        en: 'Try again after or contact us if persist',
        ca: "Torna-ho a provar més tard o contacta'ns si persisteix",
        de: 'Versuche es später erneut oder kontaktiere uns, falls das Problem weiterhin besteht',
      },
      Object.assign({}, meta, {
        desc: {
          es: 'Ups, ha ocurrido un error',
          en: 'Oops, an error occurred',
          ca: 'Ups, ha ocorregut un error',
          de: 'Ups, ein Fehler ist aufgetreten',
        },
      }),
    );
  } else if (friendlyDesc === 'credentials') {
    return new Ctor(
      location,
      func,
      {
        es: 'Prueba de nuevo o recupera la contraseña si la has olvidado',
        en: 'Try again or recover your password if you forgot it',
        ca: "Torna-ho a provar o recupera la contrasenya si l'has oblidada",
        de: 'Versuche es erneut oder setze dein Passwort zurück, falls du es vergessen hast',
      },
      Object.assign({}, meta, {
        desc: {
          es: 'Credenciales inválidas',
          en: 'Invalid credentials',
          ca: 'Credencials invàlides',
          de: 'Ungültige Anmeldedaten',
        },
      }),
    );
  } else if (friendlyDesc === 'credentials--mock') {
    return new Ctor(
      location,
      func,
      {
        es: 'La autenticación simulada falló',
        en: 'Mock authentication failed',
        ca: "L'autenticació simulada ha fallat",
        de: 'Die simulierte Authentifizierung ist fehlgeschlagen',
      },
      meta,
    );
  } else if (friendlyHeader === 'ups') {
    return new Ctor(
      location,
      func,
      friendlyDesc,
      Object.assign({}, meta, {
        desc: {
          es: 'Ups, ha ocurrido un error',
          en: 'Oops, an error occurred',
          ca: 'Ups, ha ocorregut un error',
          de: 'Ups, ein Fehler ist aufgetreten',
        },
      }),
    );
  }
  return new Ctor(location, func, friendlyDesc, meta);
}
