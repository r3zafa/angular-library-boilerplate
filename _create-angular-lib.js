#!/usr/bin/env node

const degit = require('degit');
const path = require('path');

const repo = 'r3zafa/angular-library-boilerplate';
const emitter = degit(repo, {
  cache: false,
  force: true,
  verbose: true
});

const target = process.argv[2] || 'my-lib';

emitter.clone(target).then(() => {
  console.log(`\n✅ Project created in '${target}'`);
  console.log(`\n👉 Next steps:`);
  console.log(`cd ${target}`);
  console.log(`npm install`);
});
