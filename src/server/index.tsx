import * as Express from "express";
import * as path from "path";
import * as jwt from "jsonwebtoken";
import * as bodyParser from "body-parser";

require("dotenv").config();

export interface TokenRequest extends Express.Request {
  token: string;
}
const main = () => {
  const app = Express();
  const port = 41230;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  const secureToken = (
    req: TokenRequest,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  };
  app.post("/login", (req, res, next) => {
    if (
      req.body.username === process.env.SECRET_USER &&
      req.body.password === process.env.SECRET_PASSWORD
    ) {
      const token = jwt.sign({ user: "system" }, process.env.SECRET_KEY, {
        expiresIn: 3,
      });
      res.send({
        logged: true,
        token,
      });
    } else {
      res.send({
        logged: false,
      });
    }
  });
  app.get("/bundle.js", (req, res, next) => {
    const indexFile = path.resolve(__dirname + "/bundle.js");
    res.sendFile(indexFile);
  });
  app.get("/index.html", (req, res, next) => {
    const indexFile = path.resolve(__dirname + "/index.html");
    res.sendFile(indexFile);
  });
  app.get(
    "/informe-de-labores",
    secureToken,
    (req: TokenRequest, res, next) => {
      jwt.verify(req.token, process.env.SECRET_KEY, function (err, data) {
        if (err) {
          res.sendStatus(403);
        } else {
          res.sendFile(__dirname + "/" + process.env.SECRET_PDF_FILE_NAME);
        }
      });
    }
  );

  app.listen(port);
};

main();
