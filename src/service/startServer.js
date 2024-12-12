import express from "express";
import http from "http";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";

let connectedClients = new Set();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  const clientId = uuidv4();
  connectedClients.add(clientId);
  console.log("Connected clients:", [...connectedClients]);

  socket.on("message", (msg) => {
    console.log("message from client:", msg);

    socket.broadcast.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    connectedClients.delete(clientId);
    console.log("Connected clients:", [...connectedClients]);
  });
});

export const startServer = () => {
  server.listen(3000, () => {
    console.log("listening on port:3000");
  });
};
