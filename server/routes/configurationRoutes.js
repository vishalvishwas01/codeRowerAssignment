const express = require("express");
const router = express.Router();
const {
  getConfiguration,
  updateRemark,
} = require("../controllers/configurationController");

router.get("/:id", getConfiguration);
router.put("/:id", updateRemark);

module.exports = router;
