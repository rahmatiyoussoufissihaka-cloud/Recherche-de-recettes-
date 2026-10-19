
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const chercherPlatParNom = async (nom) => {
    
await wait(2000)
const urlComplete = BASE_URL + "/search.php?s=" + nom;
  const response = await fetch(urlComplete);
   if (!response.ok) {
    throw new Error("Erreur serveur réseau");
  }
  const data = await response.json();
  return data.meals; 
};

export const obtenirRecetteParId = async (id) => {
    await wait(2000)
    const urlComplete = BASE_URL + "/lookup.php?i=" + id;
  const response = await fetch(urlComplete);
   if (!response.ok) {
    throw new Error("Erreur serveur réseau lors de la récupération des détails");
  }
  const data = await response.json();
  return data.meals ? data.meals[0] : null; 
};