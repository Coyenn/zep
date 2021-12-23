#!/usr/bin/env bash
# 🏗 Package your plugin to a .rbxm file
set -e
cd "$(dirname "$0")"
cd ../../.docker

docker-compose run foreman bash .scripts/package.sh