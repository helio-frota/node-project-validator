'use strict';

const validator = require('../index');

test('checks if package.json exists.', () => {
  expect.assertions(1);
  expect(validator.hasPackageJson('.', false)).toBe(true);
});

test('checks if project has any dependencies.', () => {
  expect.assertions(1);
  expect(validator.hasAnyDependencies('.', false)).toBe(true);
});

test('checks if project has dev dependencies.', () => {
  expect.assertions(1);
  expect(validator.hasDevDependencies('.', false)).toBe(true);
});

test('checks if project has dependencies.', () => {
  expect.assertions(1);
  expect(validator.hasDependencies('.', false)).toBe(false);
});

test('checks if project has node_modules.', () => {
  expect.assertions(1);
  expect(validator.hasNodeModules('.', false)).toBe(true);
});