/**
 * Tech Form Categories
 * @enum {string}
 */
export enum TechFormCategory {
  /** Lenguaje: main tech that have libraries and frameworks (like JS, Rust or C) */
  LENG = 'LENG',
  /** Framework: software platform built on top of a language (like Angular, React, or Django) */
  FW = 'FW',
  /** Library: reusable set of code or tools (like Lodash, NumPy, or jQuery) */
  LIB = 'LIB',
}
export const apiTechFormCategory = {
  // Opciones básicas del enum
  enum: TechFormCategory,
  enumName: 'TechFormCategory', // mirar x-enumName

  // Documentación
  description: 'The category assigned to a Tech in the input or update.',
  title: 'Tech Form Category',

  // Valores por defecto y ejemplos
  // default: TechFormCategory.LENG, // -> cuando haya una
  example: TechFormCategory.LENG,
  // examples: {
  //     language: {
  //         value: TechFormCategory.LENG,
  //         description: 'Lenguaje: main tech that have libraries and frameworks (like JS, Rust or C)'
  //     },
  //     framework: {
  //         value: TechFormCategory.FW,
  //         description: 'Framework: software platform built on top of a language to facilitate development (like Angular, React, or Django)'
  //     },
  //     library: {
  //         value: TechFormCategory.LIB,
  //         description: 'Library: reusable set of code or tools that provide specific functionality (like Lodash, NumPy, or jQuery)'
  //     }
  // }, // 🧠‼️❌ -> Esto no funciona / no se muestra nada
  // 🖊️🧑‍🎓 Metadatos adicionales
  // required: true,
  // nullable: false,
  // readOnly: false,
  // writeOnly: false,
  // deprecated: false,
  // format: 'string',

  // Esquema extendido // 🧠‼️❌ -> Esto no funciona / no se muestra nada
  // type: 'string',
  // minLength: 4,
  // maxLength: 9,
  // pattern: '^(admin|user|moderator|guest)$',

  // Metadatos externos
  // externalDocs: {
  //   description: 'User roles documentation',
  //   url: 'https://docs.example.com/user-roles'
  // }
};
export enum ReadAllParams {
  Db = 'db',
  Flatten = 'flatten',
  Category = 'category',
  Full = 'full',
}
export enum ActualizarGithubParams {
  All = 'all',
  Json = 'json',
  Md = 'md',
}
