import { writeFileSync } from 'fs';
import { PromptAnswers, Defaults } from './types';
import { getDirPath } from './helpers';

export const parseAnswers = (answers: PromptAnswers | Defaults): string => {
  const keywords = answers.keywords !== ''
    ? (answers.keywords as string)
      ?.split(',')
      ?.map((word: string) => word?.replace(/\s/g, ''))
    : [];
  
  const gitRepo = answers.gitRepo;
  const hasGitRepo = gitRepo !== '';
  const repo = hasGitRepo
    ? { repository: { type: 'git', url: `git+${gitRepo}.git` } }
    : {};
  const repoBugAndHomepage = hasGitRepo
    ? { bugs: { url: `${gitRepo}/issues` }, homepage: `${gitRepo}#readme` }
    : {};

  const pkgJS = {
    name: answers.pkgName,
    version: answers.version,
    description: answers.description,
    main: answers.entryPoint,
    scripts: {
      test: answers.testCommand
    },
    ...repo,
    keywords,
    author: answers.author,
    license: answers.license,
    ...repoBugAndHomepage
  };

  return JSON.stringify(pkgJS, null, 2);
};

export const writePackageJson = (pkgJSON: string): void => {
  const dirPath = getDirPath();
  writeFileSync(`${dirPath}/package.json`, pkgJSON);
  process.exit();
};