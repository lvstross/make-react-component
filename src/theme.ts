import clc from 'cli-color';

export const logError = (msg: string) => console.log(clc.redBright(msg));

export const logAlert = (msg: string) => console.log(clc.yellowBright(msg));

export const logSuccess = (msg: string) => console.log(clc.greenBright(msg));

export const logCode = (code: string) => console.log(clc.greenBright(code));

export const logHeading = (txt: string) => console.log(clc.cyanBright(txt));