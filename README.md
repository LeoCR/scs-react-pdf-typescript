# React PDF secured with NodeJs-Typescript

Securing a PDF file with Nodejs and jsonwebtoken

## How to do that?

Every 3 seconds the Web token will be expiring,you can not visit the pdf URL directly and you will need a JsonWebToken generated automatically when you visit this URL: `http://localhost:41230/index.html`

## What it has?

This repo needs these dependencies:

- [React PDF](https://react-pdf.org/)
- [Json Web Token](https://github.com/auth0/node-jsonwebtoken#readme)
- [Axios](https://github.com/axios/axios)
- [Webpack](https://github.com/webpack/webpack)
- [Typescript](https://github.com/Microsoft/TypeScript)

### `npm run build`

Builds the app

### `npm start`

Runs the app
Open [http://localhost:41230/index.html](http://localhost:41230/index.html)
