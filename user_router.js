const express = require("express");

const controllers = require("./user_controller.js");
const router = express.Router();

router.get("/", controllers.getAllUsers);
router.post("/", controllers.createUser);
router.get("/:id", controllers.getUserById);
router.patch("/:id", controllers.updateUser);
router.delete("/:id", controllers.deleteUser);

module.exports = router;
