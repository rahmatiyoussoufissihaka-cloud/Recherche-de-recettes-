import  { useState } from "react"


export default function  SearchForm({onSearch}){
    const[query, setQuery]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSearch(query);

    }

    return(
      <form onSubmit={handleSubmit}  className="input-group mb-4">
                <label htmlFor="search-input" className="form-label visually-hidden">
                Rechercher une recette par mot-clé
                </label>
                <input
                    id="search-input"
                    type="text"
                    value={query} 
                    className="form-control rounded-start rounded-0" 
                    placeholder="Ex: Chicken, Pizza, Beef..."
                    onChange={(e) => setQuery(e.target.value)}  />
                <button type='submit' className="btn btn-primary border-0" 
               >Rechercher</button>
      </form>
    )
}