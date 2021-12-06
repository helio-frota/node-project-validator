import { suite, test } from 'mocha';
import assert from 'assert';
import * as v from '../src/validator.js';

suite('validator', () => {
  test('package.json exists', () => {
    assert.ok(v.hasPackageJson('..', false));
  });

  test('project has any dependencies', () => {
    assert.ok(v.hasAnyDependencies('..', false));
  });

  test('project has dev dependencies', () => {
    assert.ok(v.hasDevDependencies('..', false));
  });

  test('project has production dependencies', () => {
    assert.notStrictEqual(v.hasDependencies('..', false), false);
  });

  test('project has node_modules', () => {
    assert.ok(v.hasNodeModules('..', false));
  });
});
