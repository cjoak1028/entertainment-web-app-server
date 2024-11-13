import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

let _db;

export const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://cjoak1028:WfCZxfsQENcGm3Bj@cluster0.b8mxf.mongodb.net?retryWrites=true&w=majority&appName=Cluster0"
  )
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
