<img align="right" width="300" src="foreman.png" />

# create-roblox-ts-plugin

Easily create a plugin for [Roblox Studio](https://www.roblox.com/create) using [TypeScript](https://www.typescriptlang.org).

## Prerequisites

Please make sure these tools are installed on your system before proceeding. Windows users are advised to use [WSL](https://docs.microsoft.com/windows/wsl/about).

- Bash
- Git
- Docker
- Docker Compose

## Installation

```bash
git clone https://github.com/Coyenn/create-roblox-ts-plugin.git
cd create-roblox-ts-plugin
./project init
```

## Usage

### See a list about all commands
```bash
./project help
```

### Starting the development environment
```bash
./project up
```

### Stopping the development environment
```bash
./project down
```

### Compiling TypeScript to Luau
```bash
./project build
```

### Create a distributable rbxm file
```bash
./project package
```