# node-project-validator

[![Build Status](https://travis-ci.org/helio-frota/node-project-validator.svg?branch=master)](https://travis-ci.org/helio-frota/node-project-validator)

A basic Node.js project validator

## Install

```
npm install node-project-validator -S
```

## Usage

```js
const validator = require('node-project-validator');

// The first parameter is the project root directory
// The second parameter is a flag to choose if the validator
// will handle with an error message + process.exit(1) (in case flag === true)
// or return a boolean (flag === false) then you can handle with message you want.
validator.projectHasPackageJson('.', false);

console.log(validator.projectHasPackageJson('my_project_root_dir', false));
true

console.log(validator.projectHasPackageJson('my_project_root_dir/test/', true));
'This is not a Node.js project (no package.json found).'

// others functions:

validator.projectHasDependencies('.', false);
validator.projectHasDevDependencies('.', false);
validator.projectHasAnyDependencies('.', false);
validator.projectHasNodeModules('.', false);
```