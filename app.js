let accounts = require("./accounts");
const express = require("express");
const database = require("./database");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const accountsRoutes = require("./api/accounts/accounts.routes");

app.use(express.json());
app.use("/accounts", accountsRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
