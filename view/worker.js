onmessage = function (e) {
  const n = new Notification(e.data);

  setTimeout(() => {
    n.close();
  }, 3000);
};
