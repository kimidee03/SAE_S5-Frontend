
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecommendationsPage from './pages/RecommendationsPage';
import Questionnaire from './pages/Questionnaire';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/recommendations/:id" element={<RecommendationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
