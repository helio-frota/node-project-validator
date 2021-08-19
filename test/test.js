import { suite, test } from 'mocha';
import assert from 'assert';
import * as validator from '../src/validator.js';

suite('validator', () => {
  test('package.json exists', () => {
    assert.ok(validator.hasPackageJson('..', false));
  });

  test('project has any dependencies', () => {
    assert.ok(validator.hasAnyDependencies('..', false));
  });

  test('project has dev dependencies', () => {
    assert.ok(validator.hasDevDependencies('..', false));
  });

  test('project has production dependencies', () => {
    assert.notStrictEqual(validator.hasDependencies('..', false), false);
  });

  test('project has node_modules', () => {
    assert.ok(validator.hasNodeModules('..', false));
  });
});
