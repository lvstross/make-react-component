# Templates

## What are template files?
Templates are relatively flexible files as all they simply do is return the string content desired. A template could take into account every argument or parameter a user provides, or none of them. You have a lot of options available to you and there are helper function to help you make content decisions based on arguments and parameters passed in the `utils.js` file in this directory. The current template files really do serve as the best example of this as some of them are simple while others are quite complex.

## How to generate my template?
Templates are generated based on the arguments the user passes. All the available options are layed out either in the man page or in the `utils.js` file at the root of the project in the `interpretArguments` function.

When deciding how your template gets generated, you'll need to either bundle it in with any of the available modes such as `ALL`, `DIRECTORY` or `SINGLE_FILE`, meaning you will either generate your template along with `ALL` of the available files, in a folder/`DIRECTORY` or as a `SINGLE_FILE` with no others being generated.

I'll admit, the system as it's set up now doesn't make it particularly easy to add new file types to be generated but if you follow the logic on how current files are generated and toy around with it, I'm sure you'll start to pick up on it.

The key things to keep in mind is that if your file type is a different type of file than all that are currently available, you'll have to do the following:

1. Create a new argument type for it by adding it to the `interpretArguments` logic in the root `utils.js` file under the `FILE ARGUMENTS` section.
2. Make a template generator file in the `templates` folder and
3. Add the `fs.writeFile` somewhere in the `index.js` file at the root of the project.
4. Be sure to document it in the `README.md` file and the `manPage.js` file.
