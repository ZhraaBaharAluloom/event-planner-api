const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Zari:HEHE0909@cluster0.yaeyl.mongodb.net/Cluster0?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("🚀 ~ file: database.js ~ line 11 ~ mongoDB ~ error", error);
  }
};

module.exports = mongoDB;
