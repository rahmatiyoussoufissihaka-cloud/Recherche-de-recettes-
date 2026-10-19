import { Link } from 'react-router'; 
import FavoriteButton from './FavoriteButton';


export default function RecipeCard({ recipe, favorites, onToggleFavorite}){
    const isFavorite = (favorites || []).some(fav => fav.idMeal === recipe.idMeal);
    //Position du bouton fovoris
    const cardButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        borderRadius: '50%',
        width: '38px',
        height: '38px',
        zIndex: 10
  };

    return(
        <div >
           <div className="card shadow-sm" style={{ width: '220px', position: 'relative' }}>
             <FavoriteButton 
                isFavorite={isFavorite} 
                onToggle={() => onToggleFavorite(recipe)} 
                styleCustom={cardButtonStyle}
            />
             <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="card-img-top" 
                style={{ height: '150px', objectFit: 'cover' }}/>
            <div className="card-body text-center">
                <h5 className="card-title text-truncate">{recipe.strMeal}</h5>
                <Link to={`/recettes/${recipe.idMeal}`} className="btn btn-info btn-sm w-100 mt-2 p-2">
                Voir la fiche complète
                </Link>
            </div>
           </div>
        </div>
    )

}