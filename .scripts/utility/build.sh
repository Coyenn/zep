#!/usr/bin/env bash

set -e
cd "$(dirname "$0")"/../out
[ -e tsconfig.tsbuildinfo ] && rm tsconfig.tsbuildinfo

for file in $(find . -name '*.lua'); do
    echo "$file"
    luasrcdiet "$file" --maximum -s __luasrcdiet__ --quiet
    rm "$file"
done

for file in $(find . -name '*.lua'); do
    newFileName=$(echo "$file" | sed 's/__luasrcdiet__//')

    mv "$file" "$newFileName"
done

for file in $(find . -name '*.lua'); do
    removedLineBreaks=$(cat "$file" | tr '\n' ' ')
    echo "$removedLineBreaks" > "$file"
done