import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes, favorites, onToggleFavorite}){
    if (recipes.length === 0) {
    return <p className='text-align-center text-muted'>Aucune recette à afficher.</p>;
  }
  return(
    <div className="d-flex flex-wrap gap-3 justify-content-center">
        {recipes.map((recipe)=>(
            <RecipeCard 
          key={recipe.idMeal} 
          recipe={recipe} 
          favorites={favorites} 
          onToggleFavorite={onToggleFavorite} 
        />
        ))}
    </div>
  )

}