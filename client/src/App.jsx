import { useState, useEffect } from "react";
import CreateSurvey from "./component/CreateSurvey";
import SurveyList from "./component/SurveyList";
import TakeSurvey from "./component/TakeSurvey";
import SurveyResult from "./component/SurveyResult";
import { getSurveys } from "./api";

function App() {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [view, setView] = useState("list");

  const loadSurveys = () => {
     getSurveys()
        .then(setSurveys)
        .catch(err => console.error("Failed to fetch surveys", err));
  };

  useEffect(() => {
    if (view === "list") {
      loadSurveys();
    }
  }, [view]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Survey App</h1>

      {view === "list" && (
        <SurveyList
          surveys={surveys}
          onCreate={() => setView("create")}
          onTake={(survey) => {
            setSelectedSurvey(survey);
            setView("take");
          }}
          onViewResults={(survey) => {
            setSelectedSurvey(survey);
            setView("result");
          }}
        />
      )}

      {view === "create" && (
        <CreateSurvey
          onSave={() => {
            setView("list");
          }}
        />
      )}

      {view === "take" && (
        <TakeSurvey
          survey={selectedSurvey}
          onSubmit={() => setView("list")}
        />
      )}

      {view === "result" && (
        <SurveyResult survey={selectedSurvey} onBack={() => setView("list")} />
      )}
    </div>
  );
}

export default App;
