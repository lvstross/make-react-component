import { OptionDefinition } from 'command-line-args';
import { templateOptions } from './templates';

// Handle options
export const optionDefs: OptionDefinition[] = [
  { name: 'filter', alias: 'f', type: String, multiple: true },
  { name: 'template', alias: 't', type: String },
  { name: 'group', alias: 'g', type: String, multiple: true }
];

export const defaults = {
  defaultTemplate: `[${templateOptions[0].alias}]: ${templateOptions[0].description}`
};

export const confirmPrompt = [
  {
    name: 'okay',
    message: 'Is this OK?',
    type: 'confirm'
  }
];