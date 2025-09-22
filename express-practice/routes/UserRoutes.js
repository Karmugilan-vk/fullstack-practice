const express = require("express");
const checkRole = require("../middleware/auth");
const { getUser, createUser, deleteUser } = require("../controllers/UserControllers");
const router = express.Router();

router.get("/:name", checkRole(["Admin","Member","Guest"]), getUser);

router.post("/", checkRole(["Admin","Member"]), createUser);

router.delete("/:id", checkRole(["Admin"]), deleteUser);

module.exports = router;