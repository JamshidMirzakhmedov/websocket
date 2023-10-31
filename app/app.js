const socket = io("http://localhost:8080");

socket.on("connect", () => {
  displayMessage("You are connected! " + socket.id);
});

socket.on("receive-message", (msg) => {
  displayMessage(msg);
});

function displayMessage(msg) {
  const li = document.createElement("li");
  li.innerText = msg;
  document.querySelector("ul").appendChild(li);
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.querySelector("input").value;
  displayMessage(text);
  const room = document.querySelector(".room").value;
  socket.emit("send-message", text, room);
});

// document.querySelector(".send-btn").onclick = () => {
//   const text = document.querySelector("input").value;
//   displayMessage(text);
//   socket.emit("send-message", text, room);
// };
document.querySelector(".join-btn").onclick = () => {};
