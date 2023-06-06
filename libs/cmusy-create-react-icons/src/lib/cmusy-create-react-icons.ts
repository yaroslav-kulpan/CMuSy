import { program } from 'commander';

// import * as path from 'node:path';
// import * as fs from 'node:fs/promises';
import { glob } from 'glob';

program.option('--s').option('-s, --separator <char>');
program.option('--d').option('-d, --separator <char>');

program.parse();

const options = program.opts();
console.log(options, 'options');

async function findIcons(pattern = './apps/webapp/public/icons/**/**.svg') {
  return new Promise((resolve, reject) => {
    const options = {
      ignore: ['node_modules/**'], // Ignore the node_modules directory,
    };

    glob(pattern, options, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

console.log()
