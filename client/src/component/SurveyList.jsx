import { useState } from "react";

const SurveyList = ({ surveys, onCreate, onView, reload }) => {
  //state managee
  const [answers, setAnswers] = useState({});

  const submitResponse = async (id) => {
    await fetch(`http://localhost:5000/api/survey/${id}/response`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: answers[id] }),
    });

    reload();
    alert("Data added for DB");
  };

  return (
    <div>
      <button onClick={onCreate}>Create Survey</button>

      {surveys.map((s) => (
        <div key={s._id}>
          <h3>{s.title}</h3>
          <p>{s.question}</p>

          {s.options.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={s._id}
                onChange={() => setAnswers({ ...answers, [s._id]: opt })}
              />
              {opt}
            </label>
          ))}

          <br />
          <button onClick={() => submitResponse(s._id)}>Submit</button>
          <button onClick={() => onView(s)}>View Result</button>
        </div>
      ))}
    </div>
  );
};

export default SurveyList;
