#!/usr/bin/env bash
# 🛑 Stop developing

cd "$(dirname "$0")"/../../ || exit
PLUGINNAME="plugin"

function askForPluginName() {
    echo "Which name should the plugin have?"
    read -rp "" PLUGINNAME
}

function askIfSure() {
    echo "Do you really want to init a new project? (y/N)"
    read -rp "" REPLY

    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        askForPluginName
    else
        exit 1
    fi
}

function initialise() {
    echo "Removing any old git repository and README"
    sudo rm -R .git
    sudo rm -R .docs
    rm README.md
    echo "Creating a new git project"
    git init .
    cd .docker || exit
    echo "Building docker images"
    docker-compose build
    echo "Installing node modules"
    docker-compose run yarn yarn
    cd ../
    echo "Changing name in package.json"
    sed -i "2s/.*/  \"name\": \"$PLUGINNAME\",/" package.json
    echo "Applying fixes"
    bash ./.fixes/apply-fixes.sh
    echo "Configuring gitpod.yml to not init a new project on workspace open again"
    sudo rm .gitpod.yml
    mv .gitpod-initialised.yml .gitpod.yml
}

if [ "$1" = "--skip-all" ]; then
    echo "Skipping questions"
else
    askIfSure
fi

initialise