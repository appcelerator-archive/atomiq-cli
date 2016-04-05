#!/usr/bin/env node

// init babel and stack trace support
import 'babel-polyfill';
import 'source-map-support/register';

import cli from 'commander';
import pkg from '../../package.json';

cli
  .version(pkg.version)
  .command('app <task>', 'app commands')
  .command('make <task>', 'build tasks')
  .parse(process.argv)
  ;
