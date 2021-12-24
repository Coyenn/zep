#!/usr/bin/env bash
# 🏗 Build your plugin
cd "$(dirname "$0")" || exit
cd ../../.docker || exit

echo "Removing old build files"
sudo rm -R ../out/*

echo "Compiling files"
docker-compose run zep rbxtsc

echo "Compressing files"
docker-compose run zep bash .scripts/utility/build.sh