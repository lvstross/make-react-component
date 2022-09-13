# Bugs

## Crashes when passing in more than one template alias to -t commandline argument
Steps to reproduce:
1. Run `npm run bin:up` to bootstrap the project.
2. Run `makeReact -t react-fn-js react-fn-ts`.
3. The application will crash, not knowing how to handle the second argument because it's only expecting one.

Expected Behavior:
- Program should not crash and perhaps only generate the first given template with a message telling the user to use `-g` instead for multiple templates.

Improvment Recommendations:
- Perhaps scrap `-t` all together and just use `-g` instead and repurpose it as `-t` since the functionality is redundant anyway.