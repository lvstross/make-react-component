export interface PromptAnswers {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [x: string]: Object;
  }
  
  export interface Defaults {
    pkgName: string | undefined;
    version: string;
    description: string;
    entryPoint: string;
    testCommand: string;
    gitRepo: string;
    keywords: string;
    author: string;
    license: string;
  }