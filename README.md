# Make React Component
Generate react and react-native components.

## Table Of Contents
- [Features](https://github.com/lvstross/make-react-component#features)
  - [Features to come](https://github.com/lvstross/make-react-component#features-to-come)
- [Installation](https://github.com/lvstross/make-react-component#installation)
- [Usage](https://github.com/lvstross/make-react-component#usage)
- [Arguments](https://github.com/lvstross/make-react-component#arguments)
  - [List of possible files](https://github.com/lvstross/make-react-component#list-of-possible-files)
  - [Single File Components](https://github.com/lvstross/make-react-component#single-file-components)
  - [Folder Components](https://github.com/lvstross/make-react-component#folder-components)
  - [TypeScript and React Native Components](https://github.com/lvstross/make-react-component#typescript-and-react-native-components)
  - [Class Based Components](https://github.com/lvstross/make-react-component#class-based-components)
- [Parameters](https://github.com/lvstross/make-react-component#parameters)
  - [Parameter Types](https://github.com/lvstross/make-react-component#parameter-types)
  - [File Types](https://github.com/lvstross/make-react-component#file-types)
  - [Key/Values](https://github.com/lvstross/make-react-component#keyvalues)
- [Current conventions that will be fixed](https://github.com/lvstross/make-react-component#current-conventions-that-will-be-fixed)
- [Examples](https://github.com/lvstross/make-react-component#examples)
- [Contribute](https://github.com/lvstross/make-react-component#contribute)

## Features
Here are the full list of features so far:
1. Can generate single file components as well as a folder component.
2. Can generate as either React or React Native components.
3. Can generate as either .js or .ts for TypeScript users.
4. Can generate files with custom extensions.
5. Can generate a test folder with starter test files.
6. Can generate both functional components as well as class based components.
7. Can pass in props and state parameters to be generated with your components.
8. Can destructure your props for your functional components.

### Features to come
1. Can generate stateful components with state handlers.
2. Can generate a redux connected component.
3. Can generate a react router connected component.
4. Can generate a HOC component.
5. Can generate a Graphql/Apollo data layer component.
6. Can generate all data layer connects onto index file instead of a data layer file.
7. Can generate custom file with the whole kitchen sink of options.
8. Can generate individual test files.

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

## Arguments
There are essentially two types of arguments so far.
1. File Generator Arguments: These control what files or folders are generated.
2. Platform Arguments: These control whether your files are generated with TypeScript in mind or React Native in mind.
You can place all of your arguments next to one dash or you can separate them out for better visibility. Either will work.

`-DTdsu or -D -T -d -s -u`

### List of possible files
Here are the full list of files you can generate.

```
Component.js
Component.dataLayer.js
Component.style.js
Component.utils.js

or inside a folder

/component
  |__ /__test__
  |   |
  |   |__Component.test.js
  |   |__Component.utils.test.js
  |
  |__index.js
  |__Component.dataLayer.js
  |__Component.js
  |__Component.style.js
  |__Component.utils.js
```

### Single File Components
By default, `make-react-component` generates a few different types of single files components:
* as a regular main file `default with no argument`
* as a data layer file `-d`
* as a style file `-s`, or
* an empty utils file `-u`

### Folder Components
All from the previous section also applies, but when you want to generate these files in a new component folder you can also add the following:
* `-D` will generate your files in a directory.
* `-T` will generate a test directory in that directory called `__test__`
* `-A` will generate all of the possible files as shown above in a folder.

### TypeScript and React Native Components
To generate TypeScript files and React Native components, all you need to do is add `-t` for TypeScript, and `-n` for React native to any of the above commands. TypeScript files simply generate as `.ts` files and will also add extra code for passing interfaces to your components. React Native components simply generate all of the template code with React Native components instead of HTML tags. This also includes the set up for `Stylesheet` in React Native.

### Class Based Components
Not everyone has adopted the new React hooks/functional component way of things and that's okay. If you still need your components to generate as classes, simple pass in `-c` to any of the above arguments and all of your components will be generated as classes instead of functions which is the default.

## Parameters
Parameters as of right now expands on what you want generated in your components as well as allow you to customize the way you want them to generate. There is a bunch more functionality that will be added to this, but for now, this is what you can do with parameters.

First, I'll start off by showing you a long version of what parameters looks like and then explain each part.
```
~ makeReact modal -Atn @props:data:id=str @state:main:fname=str,lname=str,age=num,happy=bool @ext:main:tsx
```
The basic structure of a parameter is this:
```
@[parameterType]:[fileType]:[key=value,key=value]
```

### Parameter Types
There are only three different parameter types as of now, but more will be added in the future: `@state`, `@props` and `@ext`.

`@state` and `@props` are for generating your components with props and state set. For right now, this only means that when using TypeScript, you will have a `Props` and a `State` interface generated for you and your props will be destructured in your functional components. With non-TypeScript components these parameters will generate and import your `PropTypes`. In the future, it will also add handlers for your state in both functional and class based components.

`@ext` stands for Extension. This allows you to pass a custom extension to a few of your generated files if for some reason you needed something other than just `.js` or `.ts`. This is useful for when you want to generate something as `.jsx` or `.tsx`. Or something even more complex like `.my.crazy.long.extension.js`. This allows for some cool customization out of the box and will be extended later for even more customizable use cases.

### File Types
As of right now, the only file types that can take advantage of the parameters system are the following:
* The `main` file or single component file: `.js`.
* The `data` layer file: `.dataLayer.js`.
* The `style` file: `.style.js`.
* The `utils` file: `.utils.js`.

Here are the file types that take advantage of each parameter type:
* `main` supports `[@state, @props, @ext]`
* `data` supports `[@state, @props, @ext]`
* `style` supports `[@ext]`
* `utils` supports `[@ext]`

Essentially, all file types can be given a custom extension, but only the data layer file and the main file can receive state and props parameters.

### Key/Values
The key/values are as they sound. It's a comma separated, unbroken string of key value pairs that you pass in for your `@state` or your `@props` parameters. These key value pairs will be placed onto the file type of your choosing as the parameter type of your choosing. For example, `@state:main:id=str` will add state to your main file and it will be an `id` with the type of `string`. The key name can be anything where as the value has to be represented with a type definition. Here are the following ways you can define your value types:
```
String: [s, str, string]
Number: [n, num, number]
Boolean: [b, bool, boolean]
Object: [o, obj, object]
Array: [a, arr, array]
Any: [any]
```

## Current conventions that will be fixed
1. Right now the style files will assume you use emotion as your styled component library. Will make this more flexible in the future to support other styled component libraries or none at all if desired.
2. On every file generation, a main component file will be generated by default along side your other files you generate. This makes it to where you can't generate a utils, style or data layer file without having a corresponding main component file generated as well. This will be changed in the future.

## Examples
a single file component

`~ makeReact footer`

A single TypeScript file generated as a class.

`~ makeReact topBar -tc`

A folder component with a test directory and test files for the utils file and main file.

`~ makeReact input -Tu`

a single file component as a `.jsx` file with an isOpen prop.

`~ makeReact modal @props:main:isOpen=bool @ext:main:jsx`

a single file TypeScript component as React Native with a `.tsx` extension.

`~ makeReact container -tn @ext:main:tsx`

a folder component with a data layer file, a utils file, and an id prop for the data layer.

`~ makeReact dropDown -Ddu @props:data:id=str`

A folder component with a test directory, a style file, a data layer file, a utils file and index file. Some files have a custom extension and props and state are passed to the main file and the data layer file.

`~ makeReact form -A @ext:main:jsx @state:main:email=s,password=s @props:main:email=s,password=s @props:data:id=s @state:data:isSubmitted=b`

A single file component as a React Native component with a custom extension.

`~ makeReact box -n @ext:main:component.partial.jsx`

## Contribute
To get started, clone the project on your machine and run `npm link` in the project root to symlink the module to npm so that you can run the `makeReact` command anywhere on your machine to test it. You can review the documentation on this [here](https://docs.npmjs.com/cli/v6/commands/npm-link). When you are finished symlinking the module, be sure to run `npm unlink` in the project root.

### Project Structure
The project is broken down into three parts:

1. The main `index.js` as the start and end of all that happens in that this is where the project gathers all the data it needs and then actually generates the files.
2. The `utils.js` files where all the shared or otherwise computations happen.
3. The `template/generate*` files that are responsible for actually compiling the file content to write to the files at the end back in the `index.js` file.

All the main data that decides which files to generate and how to generate them are centralized in the two functions called `interpretParams` and `interpretArguments` located in the `utils.js` file at the root. If you read the docs above, you know that there are two ways to tell the component generator what files to generate and in what ways to generate them and this primarily through arguments and parameters.

Once the projects knows these bits of information, it will then run through the template files which have their own `utils.js` file that has helpers to aggregate the data and generate the content accordingly. From there, the `index.js` files takes the template data and based on the arguments the user passes, will generate the corresponding files.

I want to say it's that simple, but I'll leave that up to you to decide as you look through the project.

Read more about templates [here](https://github.com/lvstross/make-react-component/tree/master/templates).