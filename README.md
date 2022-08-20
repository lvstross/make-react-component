# Make React Component
Generate react and react-native components.

<img src="https://github.com/lvstross/make-react-component/blob/main/assets/make-react-component-cli.gif" />

## Table Of Contents
- [Installation](https://github.com/lvstross/make-react-component#installation)
- [Usage](https://github.com/lvstross/make-react-component#usage)
- [Templates](https://github.com/lvstross/make-react-component#templates)
- [Shortcuts](https://github.com/lvstross/make-react-component#shortcuts)
- [Contribute](https://github.com/lvstross/make-react-component#contribute)

## Installation
```
~ npm install -g make-react-component
```

## Usage
`makeReact` is the starting command

## Templates
See the full list of available templates [here](https://github.com/lvstross/make-react-component/tree/main/src/templates).

## Shortcuts
Coming soon with CLI arguments for quicker template navigation

## Contribute
To get started, clone the project on your machine and run `npm install`. From here you can run `npm run start` to execute the project, but if you'd like to run the project as a global commnand, run `npm run bin:up` to symlink the project to your global node bin folder. The command to run the project from there will be `makeReact`. When you make changes and want to reflect them in the global command, run `npm run bin` to unlink and relink the project. When you're finished with the symlink, run `npm run bin:down` to remove the symlink.

#### Caveats when unlinking module
When running `npm run bin:down` you'll notice that this does not run the traditional `npm unlink` command that would normally unlink the project from the global scope. Instead, there is a script that locates the bin directory and removes it manually. `npm unlink` appears to not work well when using `nvm (Node Version Manager)` as your `Nodejs` installer. If you're not using `nvm` this script should still work all the same.

### Project Structure
The current architecture of the project was geared towards making it easier to contribute to. That being said it's a simple as following two steps:

1. Go into the `src/templates` folder and create a template file that simply exports a multi-line string.
2. Open up the `src/templates/index.ts` file and add a `TemplateOption` to the `templateOptions` array with your file and it's configuration.

There are plenty of examples already in place, just simply follow the pattern that is layed out already.

However, here are some general conventions to stick to:

#### Template File Names and Alias Conventions
- Web code template file names should start with `react-`. Mobile code template file names should start with `react-native-`.
- Add `fn` for function and `cl` for class if the component is a functional or class component. Not a requirement if the file is not a component file.
- Add `-js` or `-ts` at the end of the file name to indicate that it's plain javascript or typescript code.
- In between the prior conventions, give a simple alias for the feature of this template. `react-fn-redux-connect-ts` for example, is a functional web component with implemented redux connect code witten in typescript.
- When adding your template to the `templateOptions` array, make sure that your `alias` matches your file name.

#### General Conventions
- When contributing, try to make templates that would fit a general use case. Think boiler plate code.
- As much as possble, try to have multiple versions of the template idea. At least provide both a `js` and `ts` version as well as both web and mobile versions if they're components. Functional components are more preferred, but class versions as well would also be appriciated if the use case fits.
- Try to be as verbose as possible when writting typescipt files. Especially if there are  `@types` definitions for a given library or module.

## Wishlist
Let's make this tool useful in all cases! Here is a growing wish list of various common react libraries and cases that would be great to have. This wishlist is not priorty, if you have a cool ideas submit a PR and let's make it happen.

- Can generate various cases of react hooks code.
- Can generate a component using redux hooks code.
- Can generate redux store, actions, reducers code.
- Can generate redux thunk code.
- Can generate redux saga code.
- Can generate a react router connected component code.
- Can generate react-navigation code.
- Can generate an HOC.
- Can generate Graphql/Apollo component code.
- Can generate jest test code with all sorts of examples.
- Can generate @testing-library/react code.
- Can generate a styled-components file.
- Can generate @emotion/styled code.