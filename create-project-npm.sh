#!/bin/bash
echo create-project
read -p 'name: ' name
mkdir $name
cd $name
npm init -y 
read -p 'dev' DEV
read -p 'dep' DEP
npm install -D $DEV
npm install $DEP
touch "$name.js"
mkdir public
mkdir src
touch src/index.html