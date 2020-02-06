# Make React Component
Generate react and react-native components.

## Table Of Contents
1. [Features](https://github.com/lvstross/make-react-component#features)
  * [Features to come](https://github.com/lvstross/make-react-component#features-to-come)
2. [Installation](https://github.com/lvstross/make-react-component#installation)
3. [Usage](https://github.com/lvstross/make-react-component#usage)
4. [Arguments](https://github.com/lvstross/make-react-component#arguments)
  * [List of possible files](https://github.com/lvstross/make-react-component#list-of-possible-files--a)
  * [Single File Components](https://github.com/lvstross/make-react-component#single-file-components--s--d--s--u)
  * [Folder Components](https://github.com/lvstross/make-react-component#folder-components--d--t)
  * [TypeScript and React Native Components](https://github.com/lvstross/make-react-component#typescript-and-react-native-components--t--n)
  * [Class Based Components](https://github.com/lvstross/make-react-component#class-based-components--c)
5. [Parameters](https://github.com/lvstross/make-react-component#parameters)
  * [Parameter Types](https://github.com/lvstross/make-react-component#parameter-types)
  * [File Types](https://github.com/lvstross/make-react-component#file-types)
  * [Key/Values](https://github.com/lvstross/make-react-component#keyvalues)
6. [Current conventions that will be fixed](https://github.com/lvstross/make-react-component#current-conventions-that-will-be-fixed)

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
1. File Generator Arguments: These control what files are generated.
2. Platform Arguments: These control whether your files are generated with TypeScript in mind or React Native in mind.

### List of possible files: -A
Here are the full list of files you can generate with all sorts of variation. This also shows the `-A` argument which essentially gives you the kitchen sink as far as all possible files and folders are concerned.
A folder component with `.js` files will be used as an example.

```
~ makeReact component -A

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

### Single File Components: -S -d -s -u
Lets say that you already have a component file structure and you just want to generate a data layer file to handle your redux connections or calls to an API. You would navigate into your component folder were you want to generate it and run the following:
```
~ makeReact componentName -d
```
In your folder, it will generate a `componentName.dataLayer.js` file. This same behavior goes for generating a `.style` file or a `.utils` file. Use `-s` for a style component file or `-u` for a blank utils file. But if you are starting from scratch and you just want to generate a single react component file. Run the following:
```
~ makeReact componentName -S
```

### Folder Components: -D -T
All from the previous section also applies to when you want to generate these files in a new component folder. Running the following not only generates all of your files in a folder but will also generate a test directory for some of those files.
```
~ makeReact componentName -DTdsu
```
`-D` will generate your files in a directory.
`-T` will generate a test directory in that directory called `__test__`
`-d` will generate a data layer file
`-s` will generate a style file
`-u` will generate a utils file

You can place all of your arguments next to one dash or you can separate them out for better visibility. Either will work.
```
-DTdsu = -D -T -d -s -u
```

### TypeScript and React Native Components: -t -n
To generate TypeScript files and React Native components, all you need to do is add `-t` for TypeScript, and `-n` for React native to any of the above commands. TypeScript files simply generate as `.ts` files and will also add extra code for passing interfaces to your components. React Native components simply generate all of the template code with React Native components instead of HTML tags. This also includes the set up for style sheets in React Native as well.

### Class Based Components: -c
Not everyone has adopted the new React hooks/functional component way of things and that's okay. If you still need your components to generate as classes, simple pass in `-c` to any of the above arguments and all of your components will be generated as classes instead of functions by default.

## Parameters
Parameters as of right now expands of what you want generated in your components as well as allow you to customize the way you want them to generate. There is a bunch more functionality that will be added to this, but for now, this is what you can do with parameters.

First, I'll start off by showing you a long version of what parameters look like and then explain each part.
```
~ makeReact modal -Atn @props:data:id=str @state:main:fname=str,lname=str,age=num,happy=bool @ext:main:tsx
```
The basic structure of a parameter is this:
```
@[parameterType]:[fileType]:[key=value,key=value]
```

### Parameter Types
There are only three different parameter types as of now, but more will be added in the future: `@state`, `@props` and `@ext`.

`@state` and `@props` are for generating your components with props and state set. For right now, this only means that when using TypeScript, you will have a `Props` and a `State` interface generated for you. With non-TypeScript components these parameters will generate and import your `PropTypes`. In the future, it will also add handlers for your state in both functional and class based components.

`@ext` stands for Extension. This allows you to pass a custom extension to a few of your generated files if for some reason you needed something other than just `.js` or `.ts`. This is useful for when you want to generate somthing as `.jsx` or `.tsx`. Or somthing even more complex like `.my.crazy.long.extension.js`. This allows for some cool customization out of the box and will be extended later for even more customizable use cases.

### File Types
As of right now, the only file types that can take advantage of the parameters system are the following:
1. The `main` file or single component file: `.js`.
2. The `data` layer file: `.dataLayer.js`.
3. The `style` file: `.style.js`.
4. The `utils` file: `.utils.js`.

Here are the file types that take advantage of each parameter type:
- `main` supports `[@state, @props, @ext]`
- `data` supports `[@state, @props, @ext]`
- `style` supports `[@ext]`
- `utils` supports `[@ext]`

Essentially, all file types can be given a custom extension, but only the data layer file and the main file can receive state and props parameters.

### Key/Values
The key/values are as they sound. It's a comma separated, unbroken string of key value pairs that you pass in for your `@state` or your `@props` parameters. These key value pairs will be placed onto the file type of your choosing as the parameter type of your choosing. For example, `@state:main:id=str` will add state to your main file and it will be an `id` with the type of `string`. The key name can be anything where as the value has to be represented with a type definition. There are two ways you can define your types, short form or long form.
```
String: [str, string]
Number: [num, number]
Boolean: [bool, boolean]
Object: [obj, object]
Array: [arr, array]
Any: [any]
```

## Current conventions that will be fixed
1. Right now the style files will assume you use emotion as your styled component library. Will make this more flexible in the future to support other styled component libraries or none at all if desired.
