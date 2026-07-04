const { init } = require("./realtime/ws.server");
const { init } = require("./realtime/ws.server");
const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);


const PORT = process.env.PORT || 8081;

app.use(express.json());

const diagnostics = require("./routes/diagnostics.routes");
app.use("/api/diagnostics", diagnostics);

app.use(express.static(path.join(__dirname, "../dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

init(server);

server.listen(PORT, () => {
  console.log("ALIKO JB running on", PORT);
});
