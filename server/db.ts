import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connection.on("connected", () => {
  console.log("Db connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Db disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("Db reconnected");
});

mongoose.connect(
  "mongodb+srv://ducks-master:ducks-password@cluster.edrla.mongodb.net/db_dev?retryWrites=true&w=majority",
  function (err) {
    if (err) console.log(err);
  }
);

export default (req, res) =>
  mongoose.connection.readyState == 1 ? ":)" : ":(";
