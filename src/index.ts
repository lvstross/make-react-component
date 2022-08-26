#!/usr/bin/env node
import inquirer from 'inquirer';
import commandLineArgs from 'command-line-args';
import { PromptAnswers } from './types';
import { getDirPath } from './helpers';
import { parseAnswers, generateFile } from './utils';
import { optionDefs, mainPrompts, confirmPrompt, defaults } from './constants';
import { templateOptions } from './templates';
import { TemplateOption } from './templates/types';
import { Options } from './types';

(async () => {
  console.clear();
  console.log('Welcome To Make React Component\n');

  // Handle command line arguments
  const options = commandLineArgs(optionDefs) as Options;
  const dirPath = getDirPath();

  try {
    let selecting = true;
    while (selecting) {
      const answers: PromptAnswers = await inquirer.prompt(mainPrompts);
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