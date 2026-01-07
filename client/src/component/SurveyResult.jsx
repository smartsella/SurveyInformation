function SurveyResult({ survey, onBack }) {
  const counts = {};

  survey.responses.forEach((res) => {
    counts[res] = (counts[res] || 0) + 1;
  });

  return (
    <div>
      <h2>Survey Results</h2>

      <p>Total Responses: {survey.responses.length}</p>

      {Object.entries(counts).map(([option, count]) => (
        <p key={count}>
          {option}: {count}
        </p>
      ))}

      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default SurveyResult;
