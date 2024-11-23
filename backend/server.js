import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json({ limit: "10mb" }));

app.get("/api/health", (req, res) => res.send("Server is healthy"));

app.listen(process.env.SERVERPORT, () =>
  console.log(`Server up and running on port ${process.env.SERVERPORT}`)
);
