#!/usr/bin/env bash
# 🏗 Package your plugin to a .rbxm file
set -e
cd "$(dirname "$0")"
cd ../../.docker

docker-compose run zep bash .scripts/utility/package.sh
