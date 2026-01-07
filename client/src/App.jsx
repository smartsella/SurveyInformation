import { useEffect, useState } from "react";
import CreateSurvey from "./component/CreateSurvey";
import SurveyList from "./component/SurveyList";
import SurveyResult from "./component/SurveyResult";

const App = () => {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [view, setView] = useState("list");

  const loadSurveys = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/survey`);

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setSurveys(data);
    } catch (err) {
      console.error("Load surveys failed:", err.message);
    }
  };

  useEffect(() => {
    loadSurveys();
  }, []);

  return (
    <div>
      <h1>**Survey Application**</h1>

      {view === "list" && (
        <SurveyList
          surveys={surveys}
          onCreate={() => setView("create")}
          onView={(survey) => {
            setSelectedSurvey(survey);
            setView("result");
          }}
          reload={loadSurveys}
        />
      )}

      {view === "create" && (
        <CreateSurvey
          onDone={() => {
            loadSurveys();
            setView("list");
          }}
        />
      )}

      {view === "result" && (
        <SurveyResult survey={selectedSurvey} onBack={() => setView("list")} />
      )}
    </div>
  );
};

export default App;
