import { OptionDefinition } from 'command-line-args';
import { templateOptions } from './templates';
import { TemplateOption } from './templates/types';

// Handle options
export const optionDefs: OptionDefinition[] = [
  { name: 'filter', alias: 'f', type: String, multiple: true },
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
    default: defaults.defaultTemplate,
    loop: false
  }
];

export const confirmPrompt = [
  {
    name: 'okay',
    message: 'Is this OK?',
    type: 'confirm'
  }
];