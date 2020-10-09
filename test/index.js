'use strict'
const { suite, test } = require('mocha')
const assert = require('assert')
const validator = require('..')

suite('validator', () => {
  test('package.json exists', () => {
    assert.ok(validator.hasPackageJson('.', false))
  })

  test('project has any dependencies', () => {
    assert.ok(validator.hasAnyDependencies('.', false))
  })

  test('project has dev dependencies', () => {
    assert.ok(validator.hasDevDependencies('.', false))
  })

  test('project has production dependencies', () => {
    assert.ok(!validator.hasDependencies('.', false))
  })

  test('project has node_modules', () => {
    assert.ok(validator.hasNodeModules('.', false))
  })
})
