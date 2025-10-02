import { IntlBase } from './intl.type';
// import { LucideIconNames } from '@/dynamic.types'; // Esto es muy mala práctica, lo dejo para tener un ejemplo de uso y recordar que no debería hacerse, es mejor utilizar tipos dinámicos de ts <T>
enum TypeProject {
  Frontend = 'frontend',
  Backend = 'backend',
  Blockchain = 'blockchain',
  Database = 'database',
  DevOps = 'devops',
  Design = 'design',
  Other = 'other',
}
type TechProject = {
  nameId: string;
  nameBadge: string;
  img: null | string;
  web: string;
  desc: IntlBase;
  type: TypeProject[];
  typeDesc: IntlBase;
  version: string | null;
};

type TimeProject = {
  title: IntlBase;
  date: string;
  desc: IntlBase;
  type: TypeProject[];
  techs: string[]; // Referencia a los IDs de TechProject
};

type KeyProject<TIconNames> = {
  icon: {
    iconName: TIconNames;
    className: string;
  };
  title: IntlBase;
  desc: IntlBase;
};
// type KeyProject = {
//   icon: {
//     iconName: LucideIconNames;
//     className: string;
//   };
//   title: IntlBase;
//   desc: IntlBase;
// };

type ProjectBase = {
  nameId: string;
  openSource: null | string;
  operative: null | string;
  ejemplo: boolean;
  image: null | string;
  icon: LucideIconNames;
  title: IntlBase;
  desc: IntlBase;
  lilDesc: IntlBase;
  time: TimeProject[];
  keys: KeyProject[];
  techs: TechProject[];
};

