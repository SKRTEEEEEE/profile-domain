export enum IntlKey {
  'es' = 'es',
  'en' = 'en',
  'ca' = 'ca',
  'de' = 'de',
}

export type IntlBase = {
  [key in IntlKey]: string;
};

// not used
export const apiIntlKey = {
  enum: IntlKey,
  enumName: 'IntlKey',
  description: 'Internalization keys used in the application',
  title: 'Internalization Key',
};
