import { useState } from "react";

function CreateSurvey({ onSave }) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);

  const addOption = () => setOptions([...options, ""]);

  const saveSurvey = async () => {
    try {
      await import("../api").then(mod => mod.createSurvey({ title, question, options }));
      onSave(); // Navigate back
    } catch (err) {
      alert("Failed to create survey: " + err.message);
    }
  };

  return (
    <div>
      <h2>Create Survey</h2>

      <input
        placeholder="Survey Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {options.map((opt, i) => (
        <input
          key={i}
          placeholder={`Option ${i + 1}`}
          value={opt}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[i] = e.target.value;
            setOptions(newOptions);
          }}
        />
      ))}

      <button onClick={addOption}>Add Option</button>
      <button onClick={saveSurvey}>Save Survey</button>
    </div>
  );
}

export default CreateSurvey;
