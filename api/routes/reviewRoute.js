const express = require("express");
const {
  createReview,
  getReviews,
  deleteReview,
} = require("./../controllers/reviewController");
const { verifyToken } = require("../middleware/jwt");

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:id", getReviews);
router.delete("/:id", deleteReview);

module.exports = router;
