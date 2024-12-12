# WebSocket Broadcast Server

## Overview

A real-time broadcast server built with Express and Socket.IO that allows multiple clients to connect and exchange messages instantly..

## Features

- Real-time message broadcasting
- Multiple client support
- Interactive CLI using process.stdin
- Easy to set up and run
- Minimal latency communication

## Prerequisites

- Node.js (v14 or later)
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Aymen-Guerrouf/broadcast-server.git
cd broadcast-server
```

2. Install dependencies:

```bash
npm install
```

3. Link the package globally to use CLI commands:

```bash
npm link
```

## Usage

### Starting the Server

```bash
broadcast-server start
```

### Connecting Clients

```bash
broadcast-server connect
```

### Unlinking the Package (When Done)

If you want to remove the global link:

```bash
npm unlink -g
```

## Project Structure

```
broadcast-server/
│__bin
|    |__cli.js
|
├── src/
│   ├── command/
|   |__serverCommand.js #command implementation
|   |
│   └── service
|   |__connectToServer  # Client connection script
|   |__startSarver.js   #start the server script
│
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Technologies

- Express.js
- Socket.IO
- Node.js
- yargs (for CLI)

## Project URL

[https://roadmap.sh/projects/broadcast-server](https://roadmap.sh/projects/broadcast-server)

## License

ISC License
