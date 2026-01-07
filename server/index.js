import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newdb from "./src/config/newdb.js";
import surveyRoutes from "./src/routes/survey.routes.js";

dotenv.config();
newdb();
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/surveys", surveyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
