#!/usr/bin/env node
import inquirer from 'inquirer';
import commandLineArgs from 'command-line-args';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import { PromptAnswers } from './types';
import { getDirPath } from './helpers';
import {
  parseAnswers,
  generateFile,
  getFilteredTemplateOptions,
  diplayTemplateOptions,
  displayFilteredOptions,
  getSearchedTemplateOption
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

  // If filter argument found, proceed to prompt with filtered options
  // that match filter arguments
  let choices = [];
  if (!isEmpty(filters)) {
    const filteredTemplateOptions = getFilteredTemplateOptions(filters);
    choices = displayFilteredOptions(filteredTemplateOptions);
  } else {
    choices = diplayTemplateOptions();
  }

  // If template argument found, the program bypasses prompt
  if (template !== '') {
    const searchTemplateOption = getSearchedTemplateOption(template);
    // If template argument found a match, generate the file
    if (!isNil(searchTemplateOption)) {
      generateFile(searchTemplateOption, template);
      console.log(`${searchTemplateOption?.alias} generated!`);
    } else {
      // @NOTE: perhaps log options or any options that are close
      console.log(`Couldn't find ${template}? Try again.`);
    }
    process.exit();
  }

  // If group argument found, the program bypasses prompt
  if (!isEmpty(group)) {
    group.forEach((g: string) => {
      const groupTemplate = getSearchedTemplateOption(g);
      if (!isNil(groupTemplate)) {
        generateFile(groupTemplate, g);
        console.log(`${g} generated!`);
      } else {
        console.log(`No template match for ${g}`);
      }
    });
    process.exit();
  }

  try {
    while (true) {
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
      const selectedTemplate: TemplateOption | undefined = getSearchedTemplateOption(output || '');

      console.log('CODE:=============================================');
      console.log(selectedTemplate?.template);
      console.log('CODE:=============================================');

      const confirm: PromptAnswers = await inquirer.prompt(confirmPrompt);
      
      if (confirm.okay) {
        generateFile(selectedTemplate || templateOptions[0]);
        console.log(`${selectedTemplate?.alias} generated!`);
        break;
      }
      console.clear();
    }
  } catch (error) {
    throw Error(error as string | undefined);
  }
})();