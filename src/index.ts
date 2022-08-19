#!/usr/bin/env node
import inquirer from 'inquirer';
import commandLineArgs from 'command-line-args';
import { PromptAnswers } from './types';
import { getDirPath } from './helpers';
import { parseAnswers, writePackageJson } from './utils';
import { optionDefs, mainPrompts, confirmPrompt, defaults } from './constants';

// Get utils
const options = commandLineArgs(optionDefs);
const dirPath = getDirPath();

// If -y is passed, generate default package.json file
if (options.yes) {
  const pkgJSON = parseAnswers(defaults);
  writePackageJson(pkgJSON);
}

(async () => {
  console.log(`
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
See 'npm help json' for definitive documentation on these fields
and exactly what they do.
Use 'npm install <pkg>' afterwards to install a package and
save it as a dependency in the package.json file.
Press ^C at any time to quit.
`);
  try {
    const answers: PromptAnswers = await inquirer.prompt(mainPrompts);
    const pkgJSON = parseAnswers(answers);
    console.log(`
About to write to ${dirPath}/package.json:
${pkgJSON}
`);

    const confirm: PromptAnswers = await inquirer.prompt(confirmPrompt);
    if (confirm.okay) {
      writePackageJson(pkgJSON);
    }    
  } catch (error) {
    throw Error(error as string | undefined);
  }
})();