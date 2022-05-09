const express = require("express");
const router = express.Router();
const CurrencyController = require("../controllers/currencyController.js");


router.post("/add", CurrencyController.addCurrency);
//router.patch("/edit", CurrencyController.editCurrency);
//router.put("/edit", CurrencyController.replaceCurrency);
router.get("/", CurrencyController.getCurrencies);
router.get("/:id", CurrencyController.getCurrency);
router.delete("/:id", CurrencyController.deleteCurrency);

module.exports = router;
