# node-project-validator

![Node.js CI](https://github.com/helio-frota/node-project-validator/workflows/ci/badge.svg)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/helio-frota/node-project-validator.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/helio-frota/node-project-validator/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/helio-frota/node-project-validator.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/helio-frota/node-project-validator/context:javascript)
[![codecov](https://codecov.io/gh/helio-frota/node-project-validator/branch/main/graph/badge.svg?token=AROHF2UZX9)](https://codecov.io/gh/helio-frota/node-project-validator)

A basic Node.js project validator

## Install

```
npm i node-project-validator
```

## Usage

```js
const validator = require('node-project-validator');

// The first parameter is the project root directory
// The second parameter is a flag to choose if the validator
// will handle with an error message + process.exit(1)
// (in case flag === true) or return a boolean (flag === false)
// then you can handle with message you want.
validator.hasPackageJson('.', false);

console.log(validator.hasPackageJson('project_dir', false));
true

console.log(validator.hasPackageJson('project_dir/test/', true));
'This is not a Node.js project (no package.json found).'

// others functions:

validator.hasDependencies('.', false);
validator.hasDevDependencies('.', false);
validator.hasAnyDependencies('.', false);
validator.hasNodeModules('.', false);
```