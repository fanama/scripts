#!/usr/bin/env node

const {spawn} = require('child_process');

spawn('sh',[__dirname+'/create-project-npm.sh'], { stdio: 'inherit' });