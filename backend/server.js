import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";
import runRoute from "./routes/run.js"; 
import extractRoute from "./routes/extract.js"; 
import explainRoute from "./routes/explain.js"; 
import traceRoute from "./routes/trace.js"; // 🔥 CRITICAL

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoute);
app.use("/api/run", runRoute);
app.use("/api/extract", extractRoute);
app.use("/api/explain", explainRoute);
app.use("/api/trace", traceRoute); // 🔥 CRITICAL

app.listen(PORT, () => console.log(`🚀 Backend on ${PORT}`));