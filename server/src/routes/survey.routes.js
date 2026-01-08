import express from "express";
import Survey from "../models/Survey.js";

const router = express.Router();

// Create survey
router.post("/", async (req, res) => {
  const survey = await Survey.create({
    ...req.body,
  });

  res.json(survey);
});

// Get all survey
router.get("/", async (req, res) => {
  const surveys = await Survey.find();
  res.json(surveys);
});

// Submit response
router.post("/:id/response", async (req, res) => {
  const { answer } = req.body;

  await Survey.findByIdAndUpdate(req.params.id, {
    $push: { responses: answer },
  });

  res.json({ message: "Response saved" });
});

export default router;
