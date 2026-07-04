const express=
require("express");

const router=
express.Router();

const {
scan
}=
require(
"../controllers/diagnostics.controller"
);

router.post(
"/scan",
scan
);

module.exports=
router;
