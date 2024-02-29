import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {
  configServer
} from "./config/index.js";
import {
  RouterAPI
} from "./routers/index.js";
import {
  logErrors,
  errorHandler
} from "./middleware/error.handle.js";

const {
  port,
  dbUserName,
  dbPassword,
  dbName,
  dbHost
} = configServer;

const URI = `mongodb+srv://${dbUserName}:${dbPassword}@${dbName}.${dbHost}/stream-platform-db?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();

app.use(cors());
app.use(express.json());

RouterAPI(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, async () => {
  try {
    console.log(`Starting server in port ${port}`);
    const connect = await mongoose.connect(URI);
    if (connect) return console.log("MongoDB Connect");
  } catch (error) {
    console.error(error)
  }
});