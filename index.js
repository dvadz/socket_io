const express = require("express");
const socket = require("socket.io");

const app = express();

// Public
app.use(express.static("public"));

const server = app.listen(4000, function() {
  console.log("Websocket app is listening on Port 4000");
});

// Socket Setup
const io = socket(server);

io.on("connection", function(socket) {
  console.log("Made socket connection");
});
