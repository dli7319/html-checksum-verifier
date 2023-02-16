# Checksum Verifier

A simple web tool to compute the checksum of some text or small files (~100 MB). \
All checksums are computed locally using [node-forge](https://github.com/digitalbazaar/forge).

## Features
* Each checksum is computed in a separate web worker for better performance.

## Development
1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.


<!-- 
Todo:
- Compute checksums in web workers. 
- Add the ability to load multiple files and compute their checksums.
-->

