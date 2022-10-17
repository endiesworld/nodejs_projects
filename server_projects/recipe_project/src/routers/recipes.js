const express = require("express");

const router = express.Router();

// You'll add route handlers here in subsequent tasks
const { getAll, get, save, update, remove } = require("../controllers/recipes");

router.get("/", getAll);
router.post("/", save);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", remove);

// Export the router
module.exports = router;