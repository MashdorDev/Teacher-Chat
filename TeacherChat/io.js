// io.js
const colors = require("colors");

var io = require("socket.io")();

// Listen for new connections from clients (socket)
io.on("connection", function (socket) {
  console.log("<socket.io> Client connected to socket.io!".green);

  socket.on("chat message", (msg) => {
    console.log(`message: ${msg}`.italic.bgBlack.cyan);
  });

  socket.on("disconnect", () => {
    console.log("<socket.io> Client Discoonnected from socket.io!".yellow);
  });
});

// io represents socket.io on the server - let's export it
module.exports = io;
