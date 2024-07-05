const express = require("express");
const router = express.Router();

const {getCommitData, getDiffData} = require("../controller/repositories");


router.get("/:owner/:repository/commit/:oid", getCommitData);
router.get("/:owner/:repository/commit/:oid/diff", getDiffData);


module.exports = router;
