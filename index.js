#!/usr/bin/env node

const {spawn} = require('child_process');

spawn('sh',['./create-project-npm.sh'], { stdio: 'inherit' });