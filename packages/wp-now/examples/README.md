# WP Now Node.js Example

This example demonstrates how to use wp-now in a Node.js application.

## Prerequisites

-   Node.js version 16 or later
-   npm

## Setup

1. From the root of the playground-tools repository:

```bash
npm install
npm run build
```

2. Navigate to the examples directory and install dependencies:

```bash
cd packages/wp-now/examples
npm install
```

3. Run the example:

```bash
node node-example.js
```

## What the Example Does

The example will:

1. Create a wp-test directory for WordPress files
2. Download and set up WordPress
3. Initialize SQLite database
4. Start a WordPress server at http://localhost:8888

## Configuration

The example uses these default settings:

-   Port: 8888
-   PHP Version: 8.2
-   WordPress Version: latest
-   Mode: playground

You can modify these settings in `node-example.js`.

## Stopping the Server

Press Ctrl+C to gracefully shut down the server.

## Troubleshooting

If you encounter any issues:

1. Ensure you've built the project with `npm run build` from the root directory
2. Check that all dependencies are installed in the examples directory
3. Verify that port 8888 is available
4. Make sure you're using Node.js 16 or later
5. Check that you have proper permissions to create directories
