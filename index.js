import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

io.on("connection", () => {
  setInterval(() => {
    io.emit("message", "test value");
  }, 10000);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

server.listen(3000);
