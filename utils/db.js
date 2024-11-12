import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://cjoak1028:WfCZxfsQENcGm3Bj@cluster0.b8mxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("DB connected");
      callback(client);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default mongoConnect;
