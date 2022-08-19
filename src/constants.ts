import { OptionDefinition } from 'command-line-args';
import { templateOptions } from './templates';
import { TemplateOption } from './templates/types';

// Allow for options to filter different types of templates
// Web | Native | Class | Functional | Specialty | JS | TS
export const optionDefs: OptionDefinition[] = [
  { name: 'yes', alias: 'y', type: Boolean, defaultValue: false }, // Remove Later when options are probably parsed
  // { name: 'web', alias: 'w', type: Boolean, defaultValue: false },
  // { name: 'native', alias: 'n', type: Boolean, defaultValue: false },
  // { name: 'class', alias: 'c', type: Boolean, defaultValue: false },
  // { name: 'function', alias: 'f', type: Boolean, defaultValue: false },
  // { name: 'spec', alias: 's', type: Boolean, defaultValue: false },
  // { name: 'javascript', alias: 'js', type: Boolean, defaultValue: false },
  // { name: 'typeScript', alias: 'ts', type: Boolean, defaultValue: false }
];

export const defaults = {
  defaultTemplate: `[${templateOptions[0].alias}]: ${templateOptions[0].description}`
};

const diplayTemplateOptions = () => {
  return templateOptions.map((opt: TemplateOption) => {
    return `[${opt.alias}]: ${opt.description}`;
  });
};

export const mainPrompts = [
  {
    name: 'template',
    message: `Choose a template: \n\n`,
    choices: diplayTemplateOptions(),
    type: 'list',
    default: defaults.defaultTemplate
  }
];

export const confirmPrompt = [
  {
    name: 'okay',
    message: 'Is this OK?',
    type: 'confirm'
  }
];