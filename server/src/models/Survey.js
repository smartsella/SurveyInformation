import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
  title: String,
  question: String,
  options: [String],
  responses: [String],
});

export default mongoose.model("Surveylist", surveySchema);
