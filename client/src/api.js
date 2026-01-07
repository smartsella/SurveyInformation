const API_URL = 'http://localhost:5000/api';

const handleResponse = async (response) => {
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error(data.message || 'API Error');
  }
  return data;
};

export const api = {
  get: async (endpoint) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' }
    });
    return handleResponse(res);
  },
  post: async (endpoint, body) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return handleResponse(res);
  },
};

export const getSurveys = () => api.get('/surveys');
export const createSurvey = (surveyData) => api.post('/surveys', surveyData);
export const submitResponse = (id, answer) => api.post(`/surveys/${id}/response`, { answer });