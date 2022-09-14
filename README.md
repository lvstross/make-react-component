# Make React Component

Generate react and react-native components.

![gif of prompt view](https://github.com/lvstross/make-react-component/blob/main/assets/make-react-component-cli.gif "Select Template with a Prompt")

## Table Of Contents

- [Installation](https://github.com/lvstross/make-react-component#installation)
- [Usage](https://github.com/lvstross/make-react-component#usage)
- [Templates](https://github.com/lvstross/make-react-component#templates)
- [Shortcuts](https://github.com/lvstross/make-react-component#shortcuts)
- [Contribute](https://github.com/lvstross/make-react-component/tree/main/src/templates)

## Installation

```bash
~ npm install -g make-react-component
```

## Usage

`makeReact` is the starting command

## Templates

See the full list of available templates [here](https://github.com/lvstross/make-react-component/tree/main/src/templates).

## Shortcuts

The program already guides you through the process with a prompt, making it easy to find a template and generate it with out having to know any command line arguments. However, what if you use the tool so often that you generate the same template or the same group of templates over and over again.

### Filter - shortcut

Get a list of templates that fit your filter selection. Filter is a waterfall approach so any template that matches any filter you pass in will show even if it doesn't match other filters.

```bash
makeReact [-f|--filter] [<web|mobile|class|func|js|ts|jsx|tsx>]

Example: makeReact -f native jsx
```

### Template - shortcut

Generate templates just by using their template alias', bypassing the prompt all together.

```bash
makeReact [-t|--templates] [<template-alias>]

Example: makeReact -t react-fn-ts react-redux-toolkit-ts react-test-lib-jest-js
```

## Contribute

Learn how to contribute [here](https://github.com/lvstross/make-react-component/tree/main/src/templates)
