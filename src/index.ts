#!/usr/bin/env node
import inquirer from 'inquirer';
import commandLineArgs from 'command-line-args';
import { PromptAnswers } from './types';
import { getDirPath } from './helpers';
import {
  parseAnswers,
  generateFile,
  getFilteredTemplateOptions,
  diplayTemplateOptions,
  displayFilteredOptions
} from './utils';
import { optionDefs, confirmPrompt, defaults } from './constants';
import { templateOptions } from './templates';
import { TemplateOption } from './templates/types';
import { Options } from './types';

(async () => {
  console.clear();
  console.log('Welcome To Make React Component\n');

  // Handle command line arguments
  const options = commandLineArgs(optionDefs) as Options;
  const dirPath = getDirPath();

  const filters = options?.filter || [];
  const template = options?.template || '';
  const group = options?.group || [];

  let choices = [];
  if (filters.length > 0) {
    const filteredTemplateOptions = getFilteredTemplateOptions(filters);
    choices = displayFilteredOptions(filteredTemplateOptions);
  } else {
    choices = diplayTemplateOptions();
  }

  if (template !== '') {
    // get TemplateOption by template alias and proceed to generate template
  }

  if (group.length > 0) {
    // get TemplateOptions by template aliass and proceed to generate all chosen templates
  }

  try {
    let selecting = true;
    while (selecting) {
      const answers: PromptAnswers = await inquirer.prompt([
        {
          name: 'template',
          message: `Choose a template: \n\n`,
          choices,
          type: 'list',
          default: defaults.defaultTemplate,
          loop: false
        }
      ]);
      const output: string | undefined = parseAnswers(answers);
      const template: TemplateOption | undefined = templateOptions.find((opt: TemplateOption) => opt.alias === output);

      console.log('CODE:=============================================');
      console.log(template?.template);
      console.log('CODE:=============================================');

      const confirm: PromptAnswers = await inquirer.prompt(confirmPrompt);
      
      if (confirm.okay) {
        generateFile(template || templateOptions[0]);
        console.log(`${template?.alias} generated!`);
        selecting = false;
        process.exit();
      }
      console.clear();
    }
  } catch (error) {
    throw Error(error as string | undefined);
  }
})();