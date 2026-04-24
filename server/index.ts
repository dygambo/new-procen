process.on("uncaughtException", (err) => {
  console.error("Uncaught exception – server will exit:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});

import express from "express";
import session from "express-session";
import MemoryStore from "memorystore";
import path from "path";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { setupAuth } from "./auth";
import { registerRoutes } from "./routes";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const MemoryStoreSession = MemoryStore(session);

app.use(
  session({
    secret: process.env.SESSION_SECRET ?? "dev-secret-change-in-production",
    resave: false,
    saveUninitialized: false,
    store: new MemoryStoreSession({ checkPeriod: 86_400_000 }),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

setupAuth(app);
registerRoutes(app);

// Serve built static files in production
if (process.env.NODE_ENV === "production") {
  const distPublic = path.resolve(process.cwd(), "dist", "public");
  app.use(express.static(distPublic));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPublic, "index.html"));
  });
}

// WebSocket server (attached to same HTTP server)
const wss = new WebSocketServer({ server: httpServer, path: "/ws" });
wss.on("connection", (ws) => {
  ws.on("error", console.error);
});

const port = Number(process.env.PORT ?? 5000);
httpServer.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
