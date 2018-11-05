# quiphaus

A web application to store memorable quotes from friends.

## Installation

run `npm install`.

## Usage

The server will always be started on port 8500 unless otherwise specified in `process.env.PORT`. You can use a `.env` file to specify env vars. If you want to use them in your client side code, don't forget to add them in [config/env.js](config/env.js#L37).

Noteworthy npm scripts:

#### `npm run start`

Starts the app in development mode: creates a new client and server dev build using webpack, starts the Express server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.

#### `npm run build`

Creates a new build, optimized for production. Does **not** start a dev server or anything else.

#### `npm run test`

Run all tests using jest.

#### `npm run test:update`

Update all Jest snapshots (if there are any)
