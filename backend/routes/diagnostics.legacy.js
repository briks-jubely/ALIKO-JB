
const express=
require("express");

const router=
express.Router();

const {
diagnosticsScan
}=require(
"../controllers/diagnosticsController"
);

router.post(
"/scan",
diagnosticsScan
);

module.exports=
router;

