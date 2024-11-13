import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import catalogRoutes from "./routes/catalog.js";

import errorController from "./controllers/error.js";
import User from "./models/user.js";

import { mongoConnect } from "./utils/db.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use((req, res, next) => {
  User.findById("6734fd2cd304601552999fa1")
    .then((user) => {
      req.user = user;
    })
    .catch((err) => {
      console.error(err);
    });
  next();
});

app.use("/catalog", catalogRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
