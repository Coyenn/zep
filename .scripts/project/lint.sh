#!/usr/bin/env bash
# 👀 Check for formatting and style issues

set -e
cd "$(dirname "$0")"/../../ || exit

cd .docker || exit
echo "Running linters"
docker-compose run zep trunk check
