FROM ubuntu:latest

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    lua5.1 \
    luarocks \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN curl -L "https://github.com/Roblox/luau/releases/latest/download/luau-ubuntu.zip" -o ./luau-ubuntu.zip && \
    unzip ./luau-ubuntu.zip -d ./luau-ubuntu && \
    chmod -R +x ./luau-ubuntu && \
    mv ./luau-ubuntu/* /bin

RUN luarocks install --server=http://luarocks.org/dev luasrcdiet