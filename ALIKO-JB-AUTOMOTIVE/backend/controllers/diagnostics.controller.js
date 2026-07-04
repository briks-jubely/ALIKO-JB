const {
runDiagnostics
}=require("../services/diagnostics.service");

async function scan(req,res){

const result=
await runDiagnostics(
req.body?.vehicle
);

res.json(result);

}

module.exports={
scan
};
