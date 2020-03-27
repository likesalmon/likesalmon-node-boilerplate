# Node Boilerplate

Starter for bare-bones NodeJS projects.

## Quick Start

1. Install [jq](https://stedolan.github.io/jq/): `brew install jq`
2. Install dependencies: `npm i`
3. Generate a module: `npm run generate`
4. Test: `npm test`

## Things to keep in mind

- `npm start` pipes output to [jq](https://stedolan.github.io/jq/), so use the `logger` util in **/src/utils/logger** instead of `console.log`.
