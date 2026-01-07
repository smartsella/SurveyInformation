function SurveyResult({ survey, onBack }) {
  const count = {};

  survey.responses.forEach((r) => {
    count[r] = (count[r] || 0) + 1;
  });

  return (
    <div>
      <h2>{survey.title} - Results</h2>

      <p>Total Responses: {survey.responses.length}</p>

      {Object.entries(count).map(([opt, val]) => (
        <p key={opt}>
          {opt}: {val}
        </p>
      ))}

      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default SurveyResult;
