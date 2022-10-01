#!/usr/bin/env node
import commandLineArgs from 'command-line-args';
import inquirer from 'inquirer';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import {
  displayFilteredOptions,
  diplayTemplateOptions,
  generateFile,
  getFilteredTemplateOptions,
  getSearchedTemplateOption,
  logAlert,
  logCode,
  logError,
  logHeading,
  logSuccess,
  parseAnswers
} from './utils';
import { templateOptions } from './templates';
import {
  Arguments,
  ConfirmationPromptAnswer,
  FilterOption,
  NameFilePromptAnswer,
  SelectionPromptAnswer,
  TemplateOption,
  TemplateOptionAlias
} from './types';


(async () => {
  console.clear();
  logHeading('Welcome To Make React Component\n');

  // Command line arguments / options
  const args = commandLineArgs([
    { name: 'templates', alias: 't', type: String, multiple: true },
    { name: 'filter', alias: 'f', type: String, multiple: true }
  ]) as Arguments;

  // Check for options and set fallbacks
  const templates: TemplateOptionAlias[] = args?.templates || [];
  const filters: FilterOption[] = args?.filter || [];

  // If 'templates' argument found, the program bypasses prompt
  if (!isEmpty(templates)) {
    templates.forEach((tempOptAlias: TemplateOptionAlias) => {
      const groupTemplate = getSearchedTemplateOption(tempOptAlias);
      if (!isNil(groupTemplate)) {
        generateFile(groupTemplate, tempOptAlias);
        logSuccess(`${tempOptAlias} generated!`);
      } else {
        logError(`No template that matches ${tempOptAlias}. Try again.`);
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
    const templateAlias: TemplateOptionAlias | undefined = parseAnswers(selection);
    const selectedTemplateOption: TemplateOption | undefined = getSearchedTemplateOption(templateAlias || '');

    // Display template for confirmation prompt
    logAlert('CODE:=============================================');
    logCode(selectedTemplateOption?.template || '');
    logAlert('CODE:=============================================');

    const confirmation: ConfirmationPromptAnswer = await inquirer.prompt([
      {
        name: 'okay',
        message: 'Is this OK?',
        type: 'confirm'
      }
    ]);

    const name: NameFilePromptAnswer = await inquirer.prompt([
      {
        name: 'filename',
        message: 'What would you like to name your file?',
        default: selectedTemplateOption?.defaultFileName || 'component',
        type: 'input'
      }
    ]);
    
    if (confirmation.okay) {
      generateFile(selectedTemplateOption || templateOptions[0], name.filename);
      logSuccess(`${selectedTemplateOption?.alias} generated!`);
      break;
    }

    // If 'no', loop back and allow for another selection round
    console.clear();
  }
})();