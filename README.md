# Extrawest Angular App Starter

![Maintaner](https://img.shields.io/badge/maintainer-extrawest.com-blue)
![GitHub license](https://img.shields.io/github/license/extrawest/react-app-starter)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/extrawest/react-app-starter/graphs/commit-activity)
![GitHub release](https://img.shields.io/github/v/release/extrawest/react-app-starter)
[![GitHub tag](https://img.shields.io/github/v/tag/extrawest/react-app-starter)](https://github.com/extrawest/react-app-starter/tags/)

Simple boilerplate based on CLI-generated Angular application (v. 16)

Required Node.js version: ^16.14.0 || ^18.10.0

## Demo

[You can check a simple demo](https://angular-app-starter.web.app)

## Project structure

```text
Angular_app
├── src
|   └── app
|   |   └── core
|   |   |   └── guards
|   |   |       ├── ...
|   |   |   └── helpers
|   |   |       ├── ...
|   |   |   └── interceptors
|   |   |       ├── ...
|   |   |   └── models
|   |   |       ├── ...
|   |   |   └── resolvers
|   |   |       ├── ...
|   |   |   └── services
|   |   |       ├── ...
|   |   └── feature
|   |   |   └── dashboard
|   |   |       ├── ...
|   |   |   └── login
|   |   |       ├── ...
|   |   |   └── register
|   |   |       ├── ...
|   |   └── shared
|   |   |   └── components
|   |   |       ├── ...
|   |   |   └── directives
|   |   |       ├── ...
|   |   |   └── footer
|   |   |       ├── ...
|   |   |   └── header
|   |   |       ├── ...
|   |   |   └── layout
|   |   |       ├── ...
|   |   |   └── pipes
|   |   |       ├── ...
|   |   ├── app.component.html
|   |   ├── app.component.scss
|   |   ├── app.component.spec.ts
|   |   ├── app.component.ts
|   |   ├── app.routes.ts
|   └── assets
|   |   └── i18n
|   |   |   ├── en.json
|   |   |   ├── uk.json
|   |   └── icons
|   |   |   ├── en.svg
|   |   |   ├── uk.svg
|   └── environments
|   |   ├── environment.prod.ts
|   |   ├── environment.ts
|   ├── env.d.ts
|   ├── favicon.ico
|   ├── index.html
|   ├── main.ts
|   ├── polyfills.ts
|   ├── styles.scss
|   ├── test.ts
├── .codeclimate.yml
├── .editorconfig
├── .env
├── .env-example
├── .eslintignore
├── .eslintrc.json
├── .firebaserc
├── .gitignore
├── .gitlab-ci.yml
├── .nvmrc
├── .prettierignore
├── .prettierrc.json
├── angular.json
├── firebase.json
├── firstConfig.js
├── karma.conf.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Available Scripts

In the project directory, you can:

### Start new project with this boilerplate

Run `npm run first-config` to execute firstConfig.js file.

This script will:

-   check your Node.js version (v18.17.1 required);
-   ask you to enter remote link to your repository;
-   remove all unnecessary files and folders;
-   install all necessary dependencies;
-   configure husky pre-commit hook;
-   remove .git directory;
-   create new .git directory and create first initial commit;
-   set new origin to your repository;
-   your boilerplate is ready to use!

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.



## Created by Extrawest Angular Team

## Extrawest.com, 2023
