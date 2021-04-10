import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import * as path from "path";
import * as fs from "fs";
import App from "../client/App";
declare const module: any;

const main = () => {
  const express = Express();
  const port = 41230;
  express.use(Express.static("build"));

  express.get("/*", (req, res, next) => {
    const app = ReactDOM.renderToString(<App />);
    const indexFile = path.resolve(__dirname + "/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Oops, better luck next time!");
      }
      var tempData = data;
      tempData.replace(
        '<article id="menu-container"></article> ',
        `<article id="menu-container">${app}</article>`
      );

      return res.send(tempData);
    });
  });
  const server = express.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
};

main();
