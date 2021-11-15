import express from "express";
import userRoutes from "./routes/auth.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

app.use("/api/users", userRoutes);

app.listen(8000, () => {
  console.log("Server listening on Port:8000");
});
