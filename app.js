const express = require("express");
const app = express();
const eventRoutes = require("./apis/events/routes");
const mongoDB = require("./db/database");

app.use(express.json());
app.use("/events", eventRoutes);

mongoDB();

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`this app is running on localhost: ${PORT}`)
);
