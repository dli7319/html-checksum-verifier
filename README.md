# Checksum Verifier

A simple web tool to compute the checksum of some text or files. \
All checksums are computed locally using [hash-wasm](https://www.npmjs.com/package/hash-wasm).

## Features
* Each checksum is computed in a separate web worker for better performance.

## Development
1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Deployment
* This project is automatically deployed to github pages on push to main.
* For local deployment, run `npm run build` and then serve the `dist` folder.

<!-- 
Todo:
- Add the ability to load multiple files and compute their checksums.
-->

