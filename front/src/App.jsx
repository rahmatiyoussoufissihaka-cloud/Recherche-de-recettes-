import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router"; 
import Recherche from './Components/Recherche';
import Navigation from './Components/Forms/Navigation';
import RecipeDetails from './Components/RecipeDetails';
import Favoris from './Components/Favoris'


function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('mes-recettes-favoris');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem('mes-recettes-favoris', JSON.stringify(favorites));
  }, [favorites]);
  const toggleFavorite = (recipe) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some(fav => fav.idMeal === recipe.idMeal);
      if (exists) {
        // Retrait
        return currentFavorites.filter(fav => fav.idMeal !== recipe.idMeal);
      } else {
        // Ajout sécurisé sans doublon
        return [...currentFavorites, recipe];
      }
    });
  };
   return(
    <Router>
      <Navigation />
      <main className="container my-4">
       <Routes>
          <Route path="/" element={<Recherche favorites={favorites} onToggleFavorite={toggleFavorite}/>} />
          <Route path="/Favoris" element={<Favoris favorites={favorites} onToggleFavorite={toggleFavorite}/>} />
          <Route path="/recettes/:id" element={<RecipeDetails favorites={favorites} onToggleFavorite={toggleFavorite}/>} />
       </Routes>

      </main>

    </Router>
   )
}

export default App
