const express = require("express");
const router = express.Router();

const controllerUsers = require("./controllerUsers");

router.get("/", controllerUsers.findAll);

router.get("/:id", controllerUsers.findById);

router.post("/", controllerUsers.insert);

router.put("/:id", controllerUsers.update);

router.delete("/:id", controllerUsers.delete);

module.exports = router;
