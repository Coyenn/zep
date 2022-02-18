#!/usr/bin/env bash

set -e
cd "$(dirname "$0")"/../

if [ -d "./node_modules/@rbxts/roact-router/node_modules" ]; then
	sudo rm -R ./node_modules/@rbxts/roact-router/node_modules
fi

sudo cp ./.fixes/Roact.lua ./node_modules/@rbxts/roact-router/src/Roact.lua
