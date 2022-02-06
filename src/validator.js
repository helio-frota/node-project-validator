import path from 'path';
import fs from 'fs';

/**
 * Checks if the project has a `package.json` file.
 * @param {string} cwd The current working directory.
 * @param {boolean} handleIt A flag to indicate if this tool will
 * handle (true) or not (false) with the error message.
 * @returns {Promise<boolean>} true or false if the project has
 * a `package.json` file.
 */
export const hasPackageJson = async (cwd, handleIt) => {
  // @ts-ignore
  if (!(await fs.promises.exists(path.join(cwd, 'package.json')))) {
    if (handleIt) {
      console.error('This is not a Node.js project.');
      process.exit(1);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Checks if the project has any dependencies.
 * @param {string} cwd The current working directory.
 * @param {boolean} handleIt A flag to indicate if this tool will
 * handle (true) or not (false) with the error message.
 * @returns {Promise<boolean>} true or false if the project has
 * any dependencies.
 */
export const hasAnyDependencies = async (cwd, handleIt) => {
  let errors = 0;

  const { dependencies, devDependencies } = JSON.parse(
    await fs.promises.readFile(`${cwd}/package.json`, 'utf-8')
  );

  if (!dependencies) {
    errors++;
  }
  if (!devDependencies) {
    errors++;
  }
  if (errors === 2) {
    if (handleIt) {
      console.error('The project has no dependencies declared.');
      process.exit(1);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Checks if the project has dev dependencies.
 * @param {string} cwd The current working directory.
 * @param {boolean} handleIt A flag to indicate if this tool will
 * handle (true) or not (false) with the error message.
 * @returns {Promise<boolean>} true or false if the project has
 * devDependencies.
 */
export const hasDevDependencies = async (cwd, handleIt) => {
  const { devDependencies } = JSON.parse(
    await fs.promises.readFile(`${cwd}/package.json`, 'utf-8')
  );
  if (!devDependencies) {
    if (handleIt) {
      console.error('The project has no dev dependencies declared.');
      process.exit(1);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Checks if the project has production dependencies.
 * @param {string} cwd The current working directory.
 * @param {boolean} handleIt A flag to indicate if this tool will
 * handle (true) or not (false) with the error message.
 * @returns {Promise<boolean>} true or false if the project has
 * production dependencies.
 */
export const hasDependencies = async (cwd, handleIt) => {
  const { dependencies } = JSON.parse(
    await fs.promises.readFile(`${cwd}/package.json`, 'utf-8')
  );
  if (!dependencies) {
    if (handleIt) {
      console.error('The project has no dependencies declared.');
      process.exit(1);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Checks if the project has node modules installed.
 * @param {string} cwd The current working directory.
 * @param {boolean} handleIt A flag to indicate if this tool will
 * handle (true) or not (false) with the error message.
 * @returns {Promise<boolean>} true or false if the project has
 * node modules.
 */
export const hasNodeModules = async (cwd, handleIt) => {
  const modulesDir = path.join(cwd, 'node_modules');
  // @ts-ignore
  if (await fs.promises.exists(modulesDir)) {
    const content = (await fs.promises.readdir(modulesDir))
      .filter((e) => e !== '.bin');

    if (content.length === 0) {
      if (handleIt) {
        console.error('No module installed. Please run npm install.');
        process.exit(1);
      } else {
        return false;
      }
    }
  } else {
    if (handleIt) {
      console.error(
        'Directory `node_modules` not found. Please run npm install.'
      );
      process.exit(1);
    } else {
      return false;
    }
  }
  return true;
};
