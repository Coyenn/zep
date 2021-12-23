#!/usr/bin/env bash

set -e
cd "$(dirname "$0")"/../

foreman install
rojo build -o ./dist/plugin.rbxm

echo "The rbxm file is located inside ./dist"