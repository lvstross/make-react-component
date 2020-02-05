# Make React Component

Generate react and react-native components.

## What makes this utility different?

If you search npm, you'll find many packages that do just about the same thing. Many have come before this one and built tools that generate your react components just fine. What makes this one different is that it seeks to simply do more.

## Features
Here are the full list of features so far:
1. Can generate single file components as well as a folder component.
2. Can generate as either React or React Native components.
3. Can generate as either .js or .ts for TypeScript users.
4. Can generate files with custom extensions.
5. Can generate a test folder with starter test files.
6. Can generate both functional components as well as class based components.
7. Can pass in props and state parameters to be generated with your components.

### Features to come:
1. Can generate stateful components with state setters and getters.
2. Can generate a redux connected component.
3. Can generate a react router connected component.
4. Can generate a HOC component.
5. Can generate a Graphql/Apollo data layer component.
6. Can generate all data layer connects onto index file instead of a data layer file.
7. Can generate custom file with the whole kitchen sink of options.

## Installation

```
~ npm install -g make-react-component
```

## Usage

`makeReact` is the starting command

To see the full list of possible arguments and details, run:
```
~ makeReact --help
```

There are essentially two types of arguments so far.
1. File Generator Arguments: These control what files are generated.
2. Platform Arguments: These control whether your files are generated with TypeScript in mind or React Native in mind.

### Examples

Generate all possible files inside a folder with test files as TypeScript React Native files. If you don't specify `-t` or `-n`, it will generate your files as `.js` React web files.
```
~ makeReact modal -Atn
```

Generate a single react component.
```
~ makeReact modal -S
```

## Current conventions that will be fixed
1. Right now the style files will assume you use emotion as your styled component library. Will make this more flexible in the future to support other styled component libraries or none at all if desired.
