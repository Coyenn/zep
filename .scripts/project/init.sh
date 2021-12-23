#!/usr/bin/env bash
# 🛑 Stop developing
cd "$(dirname "$0")" || exit
cd .. || exit

echo "Do you really want to init a new project? (y/N)"
read -rp "" REPLY

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Which name should the plugin have?"
    read -rp "" PLUGINNAME
    echo "Changing name in package.json"
    sed -i "2s/.*/  \"name\": \"$PLUGINNAME\",/" package.json
    echo "Removing any old git repository"
    sudo rm -R .git
    echo "Creating a new git project"
    git init .
    echo "Installing node modules"
    cd .docker && \
    docker-compose run yarn yarn && \
    cd ../
    echo "Applying fixes"
    bash ./.fixes/apply-fixes.sh
fi