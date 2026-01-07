import { useState } from "react";

const CreateSurvey = ({ onDone }) => {
  //statte managee
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);

  const token = localStorage.getItem("token");

  const addOption = () => setOptions([...options, ""]);

  const createSurvey = async () => {
    await fetch(`http://localhost:5000/api/survey`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, question, options }),
    });

    onDone();
  };

  return (
    <div>
      <h2>Create Survey</h2>

      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input
        placeholder="Question"
        onChange={(e) => setQuestion(e.target.value)}
      />

      {options.map((opt, i) => (
        <input
          key={i}
          placeholder={`Option ${i + 1}`}
          onChange={(e) => {
            const copy = [...options];
            copy[i] = e.target.value;
            setOptions(copy);
          }}
        />
      ))}

      <button onClick={addOption}>Add Option</button>
      <button onClick={createSurvey}>Save</button>
    </div>
  );
};

export default CreateSurvey;
