#!/usr/bin/env node

import { program } from 'commander';
import main from '../src/gendiff.js';

program
  .name('gendiff')
  .description(' Compares two configuration files and shows a difference.')
  .version('0.1.0');

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    main(filepath1, filepath2);
  });

program.parse();
