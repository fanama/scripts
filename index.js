#!/usr/bin/env node

const { gitClone, gitRemoveOrigin } = require("./infra/git");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Name of Project : `, async (name) => {
  await gitClone(name);
  await gitRemoveOrigin(name);
  readline.close();
});

