const socket = io();

//Gestión de mensajes y su envió por socket!

document.addEventListener("DOMContentLoaded", function () {
  const btnSendMessage = document.getElementById("btnSendMessage");
  const chatMessage = document.getElementById("chatMessage");
  const userEmail = document.getElementById("userMail");

  btnSendMessage.addEventListener("click", () => {
    sendMessage(chatMessage.value, userEmail.value);
  });

  chatMessage.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage(chatMessage.value, userEmail.value);
    }
  });
});

const sendMessage = (message, user) => {
  socket.emit("message", { message, user });
  document.getElementById("chatMessage").value = "";
};


