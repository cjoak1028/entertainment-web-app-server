import mongodb from "mongodb";
import * as dotenv from "dotenv";

const MongoClient = mongodb.MongoClient;

dotenv.config();

const mongoClientUrl = process.env.MONGO_CLIENT_URL;

let _db;

export const mongoConnect = (callback) => {
  MongoClient.connect(mongoClientUrl)
    .then((client) => {
      console.log("DB connected");
      _db = client.db("catalog");
      callback();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No datbase found";
};
