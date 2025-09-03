import app from "./app.js";
import connectDB from "./config/mongodb.js";
import express from "express";
import cors from "cors";

const port = process.env.PORT || 3000;
connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://professional-search-website.vercel.app",
];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

//Starting the server in a port
app.listen(port, () => {
  console.log(`Server started at PORT: ${port}`);
});
