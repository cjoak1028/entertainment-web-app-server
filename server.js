import express from "express";
import bodyParser from "body-parser";

import mediaRoutes from "./routes/media.js";
import usersRoutes from "./routes/users.js";

import errorController from "./controllers/error.js";

import mongoConnect from "./utils/db.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/media", mediaRoutes);
app.use("/users", usersRoutes);

app.use(errorController.get404);

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
