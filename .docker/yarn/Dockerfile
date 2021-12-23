FROM node:latest

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

RUN yarn global add roblox-ts
WORKDIR /app

CMD [ "rbxtsc", "-w" ]