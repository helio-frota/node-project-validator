'use strict';

const validator = require('../index');

test('checks if package.json exists.', () => {
  expect.assertions(1);
  expect(validator.projectHasPackageJson('.', false)).toBe(true);
});

test('checks if project has any dependencies.', () => {
  expect.assertions(1);
  expect(validator.projectHasAnyDependencies('.', false)).toBe(true);
});

test('checks if project has dev dependencies.', () => {
  expect.assertions(1);
  expect(validator.projectHasDevDependencies('.', false)).toBe(true);
});

test('checks if project has dependencies.', () => {
  expect.assertions(1);
  expect(validator.projectHasDependencies('.', false)).toBe(false);
});

test('checks if project has node_modules.', () => {
  expect.assertions(1);
  expect(validator.projectHasNodeModules('.', false)).toBe(true);
});