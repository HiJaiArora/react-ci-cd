# react-ci-cd

Project Developer using react framework
Demo project fetching data from api using axios, redux, react-hooks and completely responsive application

## Running locally

Install `nvm` or `n` package manager to manage node versions

Install node version 16
`n 16.13.1` or `nvm use 16.13.1`

`npm i` to install dependencies

`npm run build` to run production build

`npm start` to start dev server which launches on http://localhost:3000/

### Instructions to start local app

1. Checkout [react-ci-cd](https://github.com/HiJaiArora/react-ci-cd).
2. Follow UI steps above , and `npm run start`.
3. This will start the UI dev server at http://localhost:3000.

### Instructions to component test cases using react-testing-library

1. Checkout [react-ci-cd](https://github.com/HiJaiArora/react-ci-cd).
2. Run npm test
3. Output should be

PASS src/App.test.js (8.722 s)
App without data
√ should renders heading (339 ms)
√ should renders loading when data is not loaded (92 ms)
App with data
√ should renders heading (123 ms)
√ should renders filter button dropdown ,onclick functionality and rendering its dropdown item (449 ms)
√ should renders card and its details (77 ms)

Test Suites: 1 passed, 1 total
Tests: 5 passed, 5 total
Snapshots: 0 total
