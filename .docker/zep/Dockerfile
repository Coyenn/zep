FROM --platform=linux/amd64 node:latest

ARG DEBIAN_FRONTEND=noninteractive

# Dependencies
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    lua5.1 \
    luarocks \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Luau and LuaSrcDiet
RUN curl -L "https://github.com/Roblox/luau/releases/latest/download/luau-ubuntu.zip" -o ./luau-ubuntu.zip && \
    unzip ./luau-ubuntu.zip -d ./luau-ubuntu && \
    chmod -R +x ./luau-ubuntu && \
    mv ./luau-ubuntu/* /bin

RUN luarocks install --server=http://luarocks.org/dev luasrcdiet

#Foreman
RUN curl -s https://api.github.com/repos/Roblox/foreman/releases/latest \
    | grep "browser_download_url.*linux*" \
    | cut -d : -f 2,3 \
    | tr -d \" \
    | xargs curl -Lo ./foreman.zip

RUN unzip ./foreman.zip -d ./foreman && \
    chmod -R +x ./foreman && \
    mv ./foreman/foreman /bin && \
    rm -R ./foreman*

ENV PATH="/root/.foreman/bin:${PATH}"

# NPM, NodeJS and Yarn
RUN yarn global add roblox-ts

CMD [ "rbxtsc", "-w" ]