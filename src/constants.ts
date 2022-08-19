import { OptionDefinition } from 'command-line-args';
import { getDirName } from './helpers';

export const optionDefs: OptionDefinition[] = [
  { name: 'yes', alias: 'y', type: Boolean, defaultValue: false },
];

export const defaults = {
  pkgName: getDirName(),
  version: '1.0.0',
  description: '',
  entryPoint: 'index.js',
  testCommand: 'echo "Error: no test specified" && exit 1',
  gitRepo: '',
  keywords: '',
  author: '',
  license: 'ISC'
};

export const mainPrompts = [
  {
    name: 'pkgName',
    message: 'package name:',
    default: defaults.pkgName
  },
  {
    name: 'version',
    message: 'version:',
    default: defaults.version
  },
  {
    name: 'description',
    message: 'description: ',
    default: defaults.description
  },
  {
    name: 'entryPoint',
    message: 'entry point:',
    default: defaults.entryPoint
  },
  {
    name: 'testCommand',
    message: 'test command: ',
    default: defaults.testCommand
  },
  {
    name: 'gitRepo',
    message: 'git repository: ',
    default: defaults.gitRepo
  },
  {
    name: 'keywords',
    message: 'keywords: ',
    default: defaults.keywords
  },
  {
    name: 'author',
    message: 'author: ',
    default: defaults.keywords
  },
  {
    name: 'license',
    message: 'license:',
    default: defaults.license
  }
];

export const confirmPrompt = [
  {
    name: 'okay',
    message: 'Is this OK?',
    type: 'confirm'
  }
];