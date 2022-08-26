export enum Platform {
    WEB = 'WEB',
    NATIVE = 'NATIVE',
    SHARED = 'SHARED'
}

export enum Shape {
    FUNCTION = 'FUNCTION',
    CLASS = 'CLASS',
    MIXED = 'MIXED'
}

export enum Syntax {
    JS = 'JS',
    TS = 'TS'
}

export enum File {
    JS = 'js',
    JSX = 'jsx',
    TS = 'ts',
    TSX = 'tsx'
}

export interface TemplateOption {
    alias: string;
    description: string;
    platform: Platform;
    shape: Shape;
    syntax: Syntax;
    template: string;
    fileType: File;
}