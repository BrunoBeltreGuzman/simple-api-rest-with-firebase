const express = require("express");
const router = express.Router();

const routersUsers = require("../api/users/routersUsers");

router.use("/users", routersUsers);

module.exports = router;
