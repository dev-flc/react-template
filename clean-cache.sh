#!/bin/bash

npm cache clean --force

rm -rf package-lock.json

rm -rf node_modules/

echo "clean cache successfully"
