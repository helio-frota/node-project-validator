import { join } from 'node:path';
import { stat, readFile, readdir } from 'node:fs/promises';

export const hasPackageJson = async (cwd: string, handleIt: boolean): Promise<boolean> => {
  if (!await stat(join(cwd, 'package.json'))) {
    if (handleIt) {
      console.error('This is not a Node.js project.');
      process.exit(1);
    } else {
      return false;
    }
  }
  return true;
};

export const hasAnyDependencies = async (cwd: string, handleIt: boolean): Promise<boolean> => {
  let errors = 0;

  const { dependencies, devDependencies } = JSON.parse(
    await readFile(`${cwd}/package.json`, 'utf-8')
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

export const hasDevDependencies = async (cwd: string, handleIt: boolean): Promise<boolean> => {
  const { devDependencies } = JSON.parse(
    await readFile(`${cwd}/package.json`, 'utf-8')
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

export const hasDependencies = async (cwd: string, handleIt: boolean): Promise<boolean> => {
  const { dependencies } = JSON.parse(
    await readFile(`${cwd}/package.json`, 'utf-8')
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

export const hasNodeModules = async (cwd: string, handleIt: boolean): Promise<boolean> => {
  const modulesDir = join(cwd, 'node_modules');
  if (await stat(modulesDir)) {
    const content = (await readdir(modulesDir)).filter((e) => e !== '.bin');

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
