import app from "./app.js";
import connectDB from "./config/mongodb.js";
import cors from "cors";

const port = process.env.PORT || 3000;
connectDB();

app.use(cors({ origin: "*" }));

//Starting the server in a port
app.listen(port, () => {
  console.log(`Server started at PORT: ${port}`);
});
