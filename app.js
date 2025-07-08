const { Server } = require("./src/server");
const { Routes } = require("./src/routes/routes");

// iiFE - imediate invoked function expression
(async() => {
  try {
    const srv = new Server();
    srv.routes(Routes);
    srv.start();
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
})();
