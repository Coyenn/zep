#!/usr/bin/env bash
# 📃 See what's going on inside your plugin
cd "$(dirname "$0")" || exit
cd ../../.docker || exit

docker-compose logs -f
exit 0