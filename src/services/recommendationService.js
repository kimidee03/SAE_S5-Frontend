const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Récupère les résultats recommandés d'une recherche par son ID
 * @param {string|number} searchId 
 * @returns {Promise<Array>} Liste des activités scorées et triées
 */
export const getRecommendationResults = async (searchId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/searches/${searchId}/results`);
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Erreur lors de la récupération des recommandations:', error);
    throw error;
  }
};