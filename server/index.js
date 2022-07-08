const server = require("live-server");

const params = {
  host: "localhost",
  port: 3000,
  open: false,
  cors: true,
  // spa: true,
  root: "./client"
};

server.start(params);
