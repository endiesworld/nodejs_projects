const express = require("express");

const router = express.Router();

// You'll add route handlers here in subsequent tasks
const { getAll, get, save, update, remove } = require("../controllers/recipes");
const auth = require('../middleware/auth');


// router.get("/", getAll);
// router.post("/", save);
// router.get("/:id", get);
// router.put("/:id", update);
// router.delete("/:id", remove);
// router.route('/').get(getAll).post(auth.authenticate(),save)
router.route('/').get(getAll).post(save)
router.route('/:id').get(get).put(update).delete(remove)

// Export the router
module.exports = router;