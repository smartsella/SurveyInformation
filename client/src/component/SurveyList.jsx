function SurveyList({ surveys, onCreate, onTake, onViewResults }) {
  return (
    <div>
      <button onClick={onCreate}>Create New Survey</button>

      <h2>Available Surveys</h2>

      {surveys.map((survey) => (
        <div key={survey.id}>
          <span>{survey.title}</span>
          <button onClick={() => onTake(survey)} style={{ marginRight: '10px' }}>Take Survey</button>
          <button onClick={() => onViewResults(survey)}>View Results</button>
        </div>
      ))}
    </div>
  );
}

export default SurveyList;
