import io from "socket.io-client";

const url = "http://localhost:3000";

export const connectToServer = () => {
  const socket = io(url);

  socket.on("connect", () => {
    socket.emit("message", "Hello from client");
    console.log("Connected to server");
  });

  socket.on("connect_error", (error) => {
    console.error("Connection error:", error);
  });

  socket.on("message", (data) => {
    console.log("Received from server:", data);
  });
  socket.on("disconnect", (reason) => {
    console.log("Disconnected from server:", reason);
  });

  process.stdin.on("data", (data) => {
    const message = data.toString().trim();
    if (message) {
      socket.emit("message", { text: message });
      console.log(`Sent: ${message}`);
    }
  });
};
