#!/usr/bin/env bash
# 🏗 Build your plugin
cd "$(dirname "$0")" || exit
cd ../../.docker || exit

echo "Removing old build files"
sudo rm -R ../out/*

echo "Compiling files"
docker-compose run yarn rbxtsc

echo "Compressing files"
docker-compose run luau bash .scripts/build.sh