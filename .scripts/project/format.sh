#!/usr/bin/env bash
# 🔨 Format the source code

set -e
cd "$(dirname "$0")"/../../ || exit

cd .docker || exit
echo "Running formatter"
docker-compose run zep trunk fmt -a
