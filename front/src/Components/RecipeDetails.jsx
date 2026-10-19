import  { useState, useEffect  } from 'react';
import { useParams, useNavigate } from 'react-router';
import { obtenirRecetteParId } from '../services/api';
import FavoriteButton from './Forms/FavoriteButton';


export default function RecipeDetails({favorites, onToggleFavorite }){
    // Récupère le paramètre ":id" configuré dans la Route de App.jsx
    const { id } = useParams();
    // Créer un bouton retour pour revenir en arrière historiquement
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

     useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await obtenirRecetteParId(id);

        if (data) {
          setRecipe(data); 
        } else {
          setError("Recette introuvable.");
        }
      } catch (err) {
        setError("Erreur de connexion avec la base de données.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

   const isFavorite = recipe && (favorites || []).some(fav => fav.idMeal === recipe.idMeal)
  // Fonction pour extraire et lier les Ingrédients et leurs Quantités
  const getIngredientsAndQuantities = () => {
   if (!recipe) return [];
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const quantity = recipe[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        list.push({
          nom: ingredient.trim(),
          quantite: quantity ? quantity.trim() : "À votre convenance"
        });
      }
    }
    return list;
  };
  if (loading) return <div className='d-flex flex-column align-items-center gap-2 m-2'>
          <div className="spinner-border text-dark" role="status"></div>
          <p className='visually-hidden'>Chargement des détails...</p>
        </div>
  if (error) return <div className="alert d-flex alert-danger border-0 shadow text-center" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        <div> Erreur : {error}</div>
      </div>
  if (!recipe) return null;

return (
    <div className="container my-4">
     
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        ← Retour
      </button>

      <div className="card shadow-sm p-4">
        <div className="d-flex align-items-center gap-2 mb-4">
            <h2 className="text-center ">{recipe.strMeal}</h2>
            <div className="d-flex align-items-center gap-2">
                <span className="text-muted small">{isFavorite ? 'Enregistré !' : 'Enregistrer ?'}</span>
                <FavoriteButton 
                    isFavorite={isFavorite} 
                    onToggle={() => onToggleFavorite(recipe)} 
                    styleCustom={{ borderRadius: '8px', padding: '8px 16px' }}
                />
            </div>
        </div>
        <div className="text-center mb-4">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal} 
            className="img-fluid rounded" 
            style={{width: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="mb-4">
          <h4>Ingrédients & Quantités</h4>
          <table className="table table-striped mt-2 table-bordered table-hover">
            <thead>
              <tr>
                <th>Ingrédient</th>
                <th>Quantité</th>
              </tr>
            </thead>
            <tbody>
              {getIngredientsAndQuantities().map((item, index) => (
                <tr key={index}>
                  <td>{item.nom}</td>
                  <td className="text-muted">{item.quantite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h4>Instructions de préparation</h4>
          <p style={{ whiteSpace: 'pre-line', lineHeight: '1.7', color: '#444' }}>
            {recipe.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
}

