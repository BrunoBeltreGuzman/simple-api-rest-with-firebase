const express = require("express");
const cors = require("cors");
const routers = require("../routers/router");

const app = express();

app.use(express.json());

app.use(cors());

app.use(routers);

module.exports = app;
