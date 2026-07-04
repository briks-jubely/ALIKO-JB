const { init } = require("./realtime/ws.server");
const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);


const PORT = process.env.PORT || 8081;

app.use(express.json());
app.get('/test-broadcast', (req,res)=>{
  const { broadcast } = require('./realtime/ws.server');
  broadcast({
    stage:'MANUAL_TEST',
    vehicle:{rpm:3000,speedKmh:88},
    timestamp:Date.now()
  });
  res.json({ok:true});
});

const diagnostics = require("./routes/diagnostics.routes");
app.use("/api/diagnostics", diagnostics);
app.get('/test-broadcast', (req,res)=>{
  const { broadcast } = require('./realtime/ws.server');
  broadcast({
    stage:'MANUAL_TEST',
    vehicle:{rpm:3000,speedKmh:88},
    timestamp:Date.now()
  });
  res.json({ok:true});
});

app.use(express.static(path.join(__dirname, "../dist")));
app.get('/test-broadcast', (req,res)=>{
  const { broadcast } = require('./realtime/ws.server');
  broadcast({
    stage:'MANUAL_TEST',
    vehicle:{rpm:3000,speedKmh:88},
    timestamp:Date.now()
  });
  res.json({ok:true});
});

app.use((req, res) => {
app.get('/test-broadcast', (req,res)=>{
  const { broadcast } = require('./realtime/ws.server');
  broadcast({
    stage:'MANUAL_TEST',
    vehicle:{rpm:3000,speedKmh:88},
    timestamp:Date.now()
  });
  res.json({ok:true});
});
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});


server.listen(PORT, () => {
init(server);
  console.log("ALIKO JB running on", PORT);
});
