export interface SelectionPromptAnswer {
  template: string;
}

export interface ConfirmationPromptAnswer {
  okay: boolean;
}

export enum FilterOption {
  WEB = 'web',
  MOBILE = 'mobile',
  CLASS = 'class',
  FUNC = 'func',
  JS = 'js',
  TS = 'ts',
  JSX = 'jsx',
  TSX = 'tsx'
}

export interface Arguments {
  filter?: FilterOption[];
  template?: TemplateOptionAlias;
  group?: TemplateOptionAlias[];
}

export enum Platform {
  WEB = 'WEB',
  MOBILE = 'MOBILE',
  SHARED = 'SHARED'
}

export enum Shape {
  FUNCTION = 'FUNC',
  CLASS = 'CLASS',
  MIXED = 'MIXED'
}

export enum Syntax {
  JS = 'JS',
  TS = 'TS'
}

export enum File {
  JS = 'js',
  JSX = 'jsx',
  TS = 'ts',
  TSX = 'tsx'
}

export type TemplateOptionAlias = string;

export interface TemplateOption {
  alias: TemplateOptionAlias;
  description: string;
  platform: Platform;
  shape: Shape;
  syntax: Syntax;
  template: string;
  fileType: File;
}