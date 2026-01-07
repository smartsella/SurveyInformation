import { useState } from "react";

function TakeSurvey({ survey, onSubmit }) {
  const [answer, setAnswer] = useState("");

  const submitResponse = async () => {
    try {
      await import("../api").then(mod => mod.submitResponse(survey._id, answer)); // Assuming survey has _id from MongoDB
      onSubmit();
    } catch (err) {
      alert("Failed to submit response: " + err.message);
    }
  };

  return (
    <div>
      <h2>{survey.title}</h2>
      <p>{survey.question}</p>

      {survey.options.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            name="answer"
            value={opt}
            onChange={() => setAnswer(opt)}
          />
          {opt}
        </div>
      ))}

      <button onClick={submitResponse}>Submit</button>
    </div>
  );
}

export default TakeSurvey;
