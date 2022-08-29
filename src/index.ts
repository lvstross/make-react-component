#!/usr/bin/env node
import inquirer from 'inquirer';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import commandLineArgs from 'command-line-args';
import {
  logError,
  logAlert,
  logSuccess,
  logHeading,
  logCode,
  parseAnswers,
  generateFile,
  getFilteredTemplateOptions,
  diplayTemplateOptions,
  displayFilteredOptions,
  getSearchedTemplateOption
} from './utils';
import { templateOptions } from './templates';
import {
  SelectionPromptAnswer,
  ConfirmationPromptAnswer,
  Arguments,
  TemplateOption,
  FilterOption
} from './types';


(async () => {
  console.clear();
  logHeading('Welcome To Make React Component\n');

  // Command line arguments / options
  const args = commandLineArgs([
    { name: 'template', alias: 't', type: String },
    { name: 'group', alias: 'g', type: String, multiple: true },
    { name: 'filter', alias: 'f', type: String, multiple: true }
  ]) as Arguments;

  // Check for options and set fallbacks
  const template: string = args?.template || '';
  const group: string[] = args?.group || [];
  const filters: FilterOption[] = args?.filter || [];

  // If 'template' argument found, the program bypasses prompt
  if (template !== '') {
    const searchTemplateOption = getSearchedTemplateOption(template);
    // If template argument found a match, generate the file
    if (!isNil(searchTemplateOption)) {
      generateFile(searchTemplateOption, template);
      logSuccess(`${searchTemplateOption?.alias} generated!`);
    } else {
      // @NOTE: perhaps log options or any options that are close
      logError(`No template that matches ${template}. Try again.`);
    }
    process.exit();
  }

  // If 'group' argument found, the program bypasses prompt
  if (!isEmpty(group)) {
    group.forEach((g: string) => {
      const groupTemplate = getSearchedTemplateOption(g);
      if (!isNil(groupTemplate)) {
        generateFile(groupTemplate, g);
        logSuccess(`${g} generated!`);
      } else {
        logError(`No template that matches ${g}. Try again.`);
      }
    });
    process.exit();
  }

  // If 'filter' argument found, proceed to prompt with filtered options
  // that match filter arguments
  let choices = [];
  if (!isEmpty(filters)) {
    const filteredTemplateOptions = getFilteredTemplateOptions(filters);
    choices = displayFilteredOptions(filteredTemplateOptions);
  } else {
    choices = diplayTemplateOptions();
  }

  // Proceed to prompt loop
  while (true) {
    // Display default or filtered template options for selection prompt
    const selection: SelectionPromptAnswer = await inquirer.prompt([
      {
        name: 'template',
        message: `Choose a template: \n\n`,
        choices,
        type: 'list',
        default: `[${templateOptions[0].alias}]: ${templateOptions[0].description}`,
        loop: false
      }
    ]);

    // Parse the selection and get template for confirmation prompt
    const output: string | undefined = parseAnswers(selection);
    const selectedTemplate: TemplateOption | undefined = getSearchedTemplateOption(output || '');

    // Display template for confirmation prompt
    logAlert('CODE:=============================================');
    logCode(selectedTemplate?.template || '');
    logAlert('CODE:=============================================');

    const confirmation: ConfirmationPromptAnswer = await inquirer.prompt([
      {
        name: 'okay',
        message: 'Is this OK?',
        type: 'confirm'
      }
    ]);
    
    if (confirmation.okay) {
      generateFile(selectedTemplate || templateOptions[0]);
      logSuccess(`${selectedTemplate?.alias} generated!`);
      break;
    }

    // If 'no', loop back and allow for another selection round
    console.clear();
  }
})();