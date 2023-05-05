#!/bin/bash
echo "start deploy test"

git checkout test 

npm run build:test

git add .

git commit -m 'test env'

git push