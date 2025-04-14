import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webHooks.js";

//Initialize express
const app = express();

// connecting to db
await connectDB();

//Middleware
app.use(cors());

//Route
app.get("/", (req, res) => res.send("Api working"));
app.post("/clerk", express.json(), clerkWebhooks);

//Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
