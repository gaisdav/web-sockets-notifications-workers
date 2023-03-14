const result = document.querySelector(".result");
const notificationError = document.querySelector(".notification-error");

if (window.Notification) {
  switch (Notification.permission) {
    case "default":
      Notification.requestPermission();
      break;
    case "denied":
      notificationError.textContent = "Включите уведомления";
      break;
  }
} else {
  console.error("Your browser doesn't support web notification.");
}

if (window.Worker) {
  const socket = io("ws://localhost:3000");
  const myWorker = new Worker("/view/worker.js");

  socket.on("message", (data) => {
    myWorker.postMessage(data);
  });
} else {
  console.error("Your browser doesn't support web workers.");
}
