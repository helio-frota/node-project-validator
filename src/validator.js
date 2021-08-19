import path from 'path';
import fs from 'fs';

export const hasPackageJson = async (cwd, handleIt) => {
  if (!(await fs.promises.exists(path.join(cwd, 'package.json')))) {
    if (handleIt) {
      console.error('This is not a Node.js project (no package.json found).');
      process.exit(1);
    } else {
      return false;
    }
  }
  return true;
};

export const hasAnyDependencies = async (cwd, handleIt) => {
  let errors = 0;

  const { dependencies, devDependencies } = JSON.parse(
    await fs.promises.readFile(`${cwd}/package.json`)
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

export const hasDevDependencies = async (cwd, handleIt) => {
  const { devDependencies } = JSON.parse(
    await fs.promises.readFile(`${cwd}/package.json`)
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

export const hasDependencies = async (cwd, handleIt) => {
  const { dependencies } = JSON.parse(
    await fs.promises.readFile(`${cwd}/package.json`)
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

export const hasNodeModules = async (cwd, handleIt) => {
  const modulesDir = path.join(cwd, 'node_modules');
  if (await fs.promises.exists(modulesDir)) {
    const content = await fs.promises.readdir(modulesDir).filter((e) => e !== '.bin');
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
        'Directory node_modules not found. Please run npm install.'
      );
      process.exit(1);
    } else {
      return false;
    }
  }
  return true;
};
