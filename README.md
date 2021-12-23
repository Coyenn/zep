# create-roblox-ts-plugin

Easily create a plugin for [Roblox Studio](https://www.roblox.com/create) using [TypeScript](https://www.typescriptlang.org).

## Get Started

### Quick Start

If you don't want to install all dependencies yourself and are fine with working on a remote host, GitPod would be the easiest choice.

<p align="center">
    <a href="https://gitpod.io/#https://github.com/Coyenn/create-roblox-ts-plugin">Open in GitPod</a>
</p>

(Initialising the workspace can take up to 5 minutes)
### Prerequisites

Please make sure these tools are installed on your system before proceeding. Windows users are advised to use [WSL](https://docs.microsoft.com/windows/wsl/about).

- Bash
- Git
- Docker
- Docker Compose

### Installation
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