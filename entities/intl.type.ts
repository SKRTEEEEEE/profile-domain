export enum IntlKey { "es"='es' , "en"='en' , "ca"='ca' , "de"='de'};

export type IntlBase = {
    [key in IntlKey]: string;
}