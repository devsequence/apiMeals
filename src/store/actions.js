import axiosClient from "../axiosClient.js";
const  mainUrl = import.meta.env.VITE_BASE_API;
export function searchMeals({commit}, keyword){
  axiosClient.get(mainUrl+`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
}


export function searchMealsByLetter({commit}, letter){
  axiosClient.get(mainUrl+`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({commit}, ing){
  axiosClient.get(mainUrl+`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setMealsByIngredients', data.meals)
    })
}
export function searchMealsByArea({commit}, area){
  axiosClient.get(mainUrl+`filter.php?a=${area}`)
    .then(({ data }) => {
        commit('setSearchMealsByArea', data.meals)
    })
    .catch(error => {
      console.log(error.message);
    });
}
export function searchCart({commit}, cart){
  axiosClient.get(mainUrl+`lookup.php?i=${cart}`)
    .then(({ data }) => {
      commit('cart', data.meals)
    })
}

