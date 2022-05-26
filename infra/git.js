#!/usr/bin/env node

const { spawn, execSync } = require("child_process");

async function gitClone(project) {
  execSync(
    `git clone https://github.com/fanama/next-secure-git.git ${project}`
  );
}

async function gitRemoveOrigin(project) {
  execSync(`cd ${project} && git remote rm origin`);
}
module.exports = { gitClone, gitRemoveOrigin };
