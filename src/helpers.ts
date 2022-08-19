import { spawnSync } from 'child_process';

/**
 * Get Director Path of Execution
 */
export const getDirPath = (): string => `${process.env.INIT_CWD || process.env.PWD}`;

/**
 * Get Directory Name of Execution
 */
export const getDirName = (): string | undefined => {
  const dirPath = getDirPath();
  return dirPath?.split('/')?.pop();
};

/**
 * Run Terminal Commands
 */
export const runCmd = (cmd: string): void => {
  const options = cmd?.split('');
  const command = options?.shift();
  const result = spawnSync(command as string, options);
  if (result.status !== 0) {
    process.stderr.write(result.stderr);
    process.exit(result.status as number);
  } else {
    process.stdout.write(result.stdout);
    process.stderr.write(result.stderr);
  }
};