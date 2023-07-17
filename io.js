// io.js
const colors = require("colors");

var io = require("socket.io")();

io.on("connection", function (socket) {
  console.log("<socket.io> Client connected to socket.io!".green);

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log(`message: ${msg}`.italic.bgBlack.cyan);
  });

  socket.on("disconnect", () => {
    console.log("<socket.io> Client Discoonnected from socket.io!".yellow);
  });
});

module.exports = io;
