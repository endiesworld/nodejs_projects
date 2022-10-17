const express = require("express");

const router = express.Router();

// You'll add route handlers here in subsequent tasks
const { getAll, save } = require("../controllers/recipes");

router.get("/", getAll);
router.post("/", save);

// Export the router
module.exports = router;