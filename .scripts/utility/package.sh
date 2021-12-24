#!/usr/bin/env bash

set -e
cd "$(dirname "$0")"/../

foreman install
rojo build -o ./plugin.rbxm
rm -R ./out/*
mv ./plugin.rbxm ./out

echo "The rbxm file is located inside ./out"