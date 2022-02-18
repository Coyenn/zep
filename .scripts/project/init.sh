#!/usr/bin/env bash
# 🆕 Initialize a new plugin

set -e

cd "$(dirname "$0")"/../../ || exit
PLUGINNAME="plugin"

function checkRequirements() {
	echo "Checking requirements"
	bash .scripts/utility/check-requirements.sh
	echo "All requirements satisfied"
}

function askForPluginName() {
	echo "Which name should the plugin have?"
	read -rp "" PLUGINNAME
}

function askIfSure() {
	echo "Do you really want to initialize a new plugin? (y/N)"
	read -rp "" REPLY

	if [[ $REPLY =~ ^[Yy]$ ]]; then
		askForPluginName
	else
		exit 1
	fi
}

function initialize() {
	echo "Removing any old git repository and README"
	sudo rm -R .git
	sudo rm -R .docs
	rm README.md
	echo "Creating a new git project"
	git init . -b main
	echo "Installing dependencies"
	./project install
	echo "Changing name in package.json"
	sed -i "2s/.*/  \"name\": \"$PLUGINNAME\",/" package.json
	echo "Configuring gitpod.yml to not init a new project on workspace open again"
	sudo rm .gitpod.yml
	mv .gitpod-initialized.yml .gitpod.yml
}

checkRequirements

if [ "$1" = "--skip-all" ]; then
	echo "Skipping questions"
else
	askIfSure
fi

initialize
