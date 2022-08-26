export interface PromptAnswers {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [x: string]: string;
}
  
export interface Defaults {
  template: string;
}

export enum FilterOption {
  WEB = 'web',
  MOBILE = 'mobile',
  CLASS = 'class',
  FUNC = 'func',
  JS = 'js',
  TS = 'ts'
}

export interface Options {
  filter: FilterOption[];
}