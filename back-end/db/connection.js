const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

async function connect() {
  console.log(`connect function running`);
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set("strictQuery", true)
  const db = await mongoose.connect(getUri);
  console.log("DB CONNECTED");
  return db;
}

module.exports = connect;
