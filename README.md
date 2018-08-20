# Starting with Typescript and Webpack

## Setup Webpack as our frontend runner

    - create package.json
        . > npm init

    - Install webpack and its cli locally
        . > npm i -D webpack webpack-cli webpack-serve or npm install webpack webpack-cli webpack-serve --save-dev
        We used webpack-serve as our development server instead of webpack-dev-server

    - Install Typescript compiler and loaders
        . > npm i -D typescript ts-loader tslint tslint-loader
        . > ts-loader:
            Meaning...
        . > tslint and tslint-loader:
            Meaning...

    - **Later, we will install webpack plugins that are needed for our project

    - Create typescript configuration file
        Create a tsconfig.json file, a simple configuration file for transpiling/compiling our typescript code to ES2015. In a command line type the below code to generate tsconfig.json
        > tsc --init

        In a regular typescript compiling, we can just run tsc to compile all our .ts files to js. We wouldn't use tsc to compile our files but webpack.

    - Create webpack.config.js
        This file will configure webpack to handle typescript compilation, asset management, dev server, etc.
        . Create a file under your project folder as "webpack.config.js"

    - Create tslint.json file
        > tslint --init
        TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters.

    - Install webpack plugins and configure plugins for webpack
        >  npm install -D fork-ts-checker-webpack-plugin clean-webpack-plugin html-webpack-plugin