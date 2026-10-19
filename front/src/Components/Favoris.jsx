
import RecipeList from "./Forms/RecipeList";

export default function Favoris({ favorites = [], onToggleFavorite }) {
  return (
    <div className="container my-4">
      
      <h2 className="text-center mb-4">
        <svg 
        className="me-1"
            xmlns="http://w3.org" 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="#e63946" 
            stroke="#e63946" 
            strokeWidth="1.5"
            >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
         Mes Recettes Enregistrées ({(favorites).length})
      </h2>

      {favorites.length === 0 ? (
        
        <div className="text-center my-5 py-5 border rounded bg-info">
          <p className="fs-5 mb-2">Vous n'avez pas encore de recettes favorites.</p>
          <p className="text-secondary small">
            Allez sur l'onglet <strong className="text-dark ">Recherche</strong> pour explorer la base de données et ajouter des plats !
          </p>
        </div>
      ) : (
        
        <RecipeList 
          recipes={favorites} 
          favorites={favorites} 
          onToggleFavorite={onToggleFavorite} 
        />
      )}
    </div>
  );
}
    