import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import updateRouter from "./routes/updateRoutes.js";
import experienceRouter from "./routes/experienceRoutes.js";
import educationRouter from "./routes/educationRoutes.js";
import skillRouter from "./routes/skillRoutes.js";
import favoritesRouter from "./routes/favoritesRoutes.js";
import professionRouter from "./routes/professionRoutes.js";

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://professional-search-website.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("Not allowed by CORS"), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.options(
  "*",
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/update", updateRouter);
app.use("/api/exp", experienceRouter);
app.use("/api/edu", educationRouter);
app.use("/api/sk", skillRouter);
app.use("/api/fav", favoritesRouter);
app.use("/api/prof", professionRouter);

//Routes
app.get("/", (req, res) => {
  res.send("This is the landing page.");
});

export default app;
