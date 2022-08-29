import clc from 'cli-color';
import { writeFileSync } from 'fs';
import isEmpty from 'lodash/isEmpty';
import { templateOptions } from './templates';
import {
  FilterOption,
  SelectionPromptAnswer,
  TemplateOption,
  TemplateOptionAlias
} from './types';

export const logError = (msg: string) => console.log(clc.redBright(msg));

export const logAlert = (msg: string) => console.log(clc.yellowBright(msg));

export const logSuccess = (msg: string) => console.log(clc.greenBright(msg));

export const logCode = (code: string) => console.log(clc.greenBright(code));

export const logHeading = (txt: string) => console.log(clc.cyanBright(txt));

export const getDirPath = (): string => `${process.env.INIT_CWD || process.env.PWD}`;

export const parseAnswers = (answers: SelectionPromptAnswer): TemplateOptionAlias | undefined => {
  return parseTemplateOption(answers.template);
};

export const parseTemplateOption = (tempOpt: string): TemplateOptionAlias | undefined => {
  const betweenSquareBrackets = /\[(.+?)\]/;
  const captured = tempOpt.match(betweenSquareBrackets);
  return captured?.[1] as TemplateOptionAlias;
};

export const generateFile = (temp: TemplateOption, fileName?: string): void => {
  if (!isEmpty(temp.alias)) {
    const dirPath = getDirPath();
    writeFileSync(`${dirPath}/${fileName || 'Component'}.${temp.fileType}`, temp.template);
  } else {
    logError('No template match');
  }
};

export const getFilteredTemplateOptions = (filters: FilterOption[]): TemplateOption[] => {
  return templateOptions.filter((temp: TemplateOption) => {
    const platform = temp.platform.toLowerCase() as FilterOption;
    const shape = temp.shape.toLowerCase() as FilterOption;
    const syntax = temp.syntax.toLowerCase() as FilterOption;
    const file = temp.fileType.toLowerCase() as FilterOption;
    if (
      filters.includes(platform) ||
      filters.includes(shape) ||
      filters.includes(syntax) ||
      filters.includes(file)
    ) {
      return true;
    }
    return false;
  });
};

export const diplayTemplateOptions = () => {
  return templateOptions.map((opt: TemplateOption) => {
    return `[${opt.alias}]: ${opt.description}`;
  });
};

export const displayFilteredOptions = (temp: TemplateOption[]) => {
  return temp.map((opt: TemplateOption) => {
    return `[${opt.alias}]: ${opt.description}`;
  });
};

export const getSearchedTemplateOption =
  (temp: TemplateOptionAlias): TemplateOption | undefined => {
  return templateOptions.find((t: TemplateOption) => {
    return t.alias === temp;
  });
};
