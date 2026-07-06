const mongoose = require("mongoose");

async function connectDb() {
  const mongoUrl = process.env.MONGO_URL;

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  await mongoose.connect(mongoUrl, {
    dbName: process.env.DB_NAME || "muscle_cage",
  });

  return mongoose.connection;
}

module.exports = connectDb;