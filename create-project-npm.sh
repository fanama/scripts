#!/bin/bash
echo create-project
read -p 'name: ' NAME
mkdir $NAME
cd $NAME
npm init -y 
read -p 'dev: ' DEV
read -p 'dep: ' DEP
npm install -D $DEV
npm install $DEP
touch "$NAME.js"

for MODULE in $DEP
do
    echo "const $MODULE = require('$MODULE') \n ">>$NAME.js
done


mkdir public
mkdir src
touch src/app.js