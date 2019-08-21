// Make socket connection
const socket = io.connect("localhost:4000");

// Query DOM
const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

// Event listeners
btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", function() {
  socket.emit("typing", { handle: handle.value });
});

// Listen for events
socket.on("chat", function(data) {
  feedback.innerHTML = "";
  output.innerHTML += "<p><strong>" + data.handle + "</strong>" + data.message + "</p>";
});

socket.on("typing", function(data) {
  feedback.innerHTML = "<p><em>" + data.handle + " is typing a message...</em></p>";
});
