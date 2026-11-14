import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RecommendationsPage from './pages/RecommendationsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route temporaire d'accueil qui redirige vers une recherche d'exemple */}
        <Route path="/" element={<Navigate to="/recommendations/1" replace />} />
        
        {/* Route principale pour l'issue #23 */}
        <Route path="/recommendations/:id" element={<RecommendationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
