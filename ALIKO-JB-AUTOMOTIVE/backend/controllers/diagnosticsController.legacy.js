
const {
scan
}=require("../services/diagnosticsService");

async function diagnosticsScan(
req,
res
){

const result=
await scan(
req.body.vehicle
);

res.json(
result
);

}

module.exports={
diagnosticsScan
};

