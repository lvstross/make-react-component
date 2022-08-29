import { writeFileSync } from 'fs';
import isEmpty from 'lodash/isEmpty';
import { PromptAnswers, Defaults, FilterOption } from './types';
import { getDirPath } from './helpers';
import { TemplateOption } from './templates/types';
import { templateOptions } from './templates';
import { logError } from './theme';

export const parseAnswers = (answers: PromptAnswers | Defaults): string | undefined => {
  return parseTemplateOption(answers.template);
};

export const parseTemplateOption = (tempOpt: string) => {
  const betweenSquareBrackets = /\[(.+?)\]/;
  const captured = tempOpt.match(betweenSquareBrackets);
  return captured?.[1];
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

export const getSearchedTemplateOption = (temp: string): TemplateOption | undefined => {
  return templateOptions.find((t: TemplateOption) => {
    return t.alias === temp;
  });
};
