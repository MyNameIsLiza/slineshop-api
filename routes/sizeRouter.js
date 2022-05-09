const express = require("express");
const router = express.Router();
const SizeController = require("../controllers/sizeController.js");


router.post("/add", SizeController.addSize);
//router.patch("/edit", SizeController.editSize);
//router.put("/edit", SizeController.replaceSize);
router.get("/", SizeController.getSizes);
router.get("/:id", SizeController.getSize);
router.delete("/:id", SizeController.deleteSize);

module.exports = router;
