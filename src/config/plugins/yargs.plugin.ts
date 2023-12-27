import { argv } from 'process';
import yargs, { boolean, number } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'b',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication Table Base',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'The limit number',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'This option displays the table within the terminal',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File name',
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    description: 'File destination',
  })
  .check((argv, options) => {
    const { b } = argv;

    if (b <= 0) throw 'The base must be greater than 0';

    return true;
  })
  .parseSync();
