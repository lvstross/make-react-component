import { writeFileSync } from 'fs';
import { PromptAnswers, Defaults } from './types';
import { getDirPath } from './helpers';
import { TemplateOption } from './templates/types';

export const parseAnswers = (answers: PromptAnswers | Defaults): string | undefined => {
  return parseTemplateOption(answers.template);
};

export const parseTemplateOption = (tempOpt: string) => {
  const betweenSquareBrackets = /\[(.+?)\]/;
  const captured = tempOpt.match(betweenSquareBrackets);
  return captured?.[1];
};

export const generateFile = (temp: TemplateOption): void => {
  if (temp.alias) {
    const dirPath = getDirPath();
    writeFileSync(`${dirPath}/Component.${temp.fileType}`, temp.template);
  } else {
    console.warn('Warning: No template match');
  }
};
