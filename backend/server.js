import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 5000;

// CORS — allow frontend
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true,
}));
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "AlgoVision API running ✅" });
});

// Chat route
app.use("/api/chat", chatRoute);

// Listen on 0.0.0.0 to accept both IPv4 and IPv6
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
  console.log(`   Also on http://127.0.0.1:${PORT}`);
  console.log(
    `🔑 Groq key loaded: ${process.env.GROQ_API_KEY ? "YES" : "NO — check .env"}`
  );
});

// Catch crashes
process.on("uncaughtException", (err) => {
  console.error("💥 Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("💥 Unhandled Rejection:", err);
});