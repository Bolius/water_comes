[![Coverage Status](https://coveralls.io/repos/github/Bolius/water_comes/badge.svg?branch=master)](https://coveralls.io/github/Bolius/water_comes?branch=master)

# Water widget

A react app made to function as a "widget" for the
_when the water comes/Når vandet kommer_ campaign.

The design for the app was made in Adobe XD the design can be seen in the
_design_ folder.


## Technical setup
The repo conforms to the [12 factor principles](https://12factor.net), to
configure the app copy `.env.example` to `.env.development.local` and fill in
the values.


The code is written using React, to get a local setup install node and run
```bash
$ npm install
$ npm start
```

There are both some unit tests using [jest](https://jestjs.io) and end-2-end
tests using [cypress](https://www.cypress.io). To run the tests execute
```bash
$ npm test # Unit/snapshot tests
$ npx cypress run # E2E tests --- `npm cypress open` shows cypress output
```
Remember to run `npm start` before using cypress.

## Code structure
The `src/views` folder contains the general pages of the app which is built
using the pieces in `src/components`. Non UI code is in the `data-handlers`
folder.

The recommended articles and text for the risks are in the `articles.json` and
`risk.json` files.


