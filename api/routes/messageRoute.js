const express = require("express");
const { verifyToken } = require("../middleware/jwt");

const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");
const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/:id", verifyToken, getMessages);

module.exports = router;
