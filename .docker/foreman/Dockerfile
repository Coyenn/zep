FROM rust:latest

WORKDIR /app

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    unzip \
    grep \
    && rm -rf /var/lib/apt/lists/*

RUN curl -s https://api.github.com/repos/Roblox/foreman/releases/latest \
    | grep "browser_download_url.*linux*" \
    | cut -d : -f 2,3 \
    | tr -d \" \
    | xargs curl -Lo ./foreman.zip

RUN unzip ./foreman.zip -d ./foreman && \
    chmod -R +x ./foreman && \
    mv ./foreman /bin

ENV PATH="/root/.foreman/bin:${PATH}"