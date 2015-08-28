#!/bin/bash

echo Getting things into place...
cp ./app/index.html ./index.html

echo Starting dev server...
webpack-dev-server --progress --colors

echo Cleaning up...
rm ./index.html