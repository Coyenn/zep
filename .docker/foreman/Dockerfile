FROM rust:latest

WORKDIR /app

RUN curl -s https://api.github.com/repos/Roblox/foreman/releases/latest \
    | grep "linux*" \
    | cut -d '"' -f 4 \
    | wget -qi - && \
    unzip ./foreman*.zip -d ./foreman && \
    chmod -R +x ./foreman && \
    mv ./foreman /bin

ENV PATH="/root/.foreman/bin:${PATH}"