import axiosClient from "../axiosClient.js";
export function searchMeals({commit}, keyword){
  axiosClient.get(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
}

export function searchMealsByLetter({commit}, letter){
  axiosClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({commit}, ing){
  axiosClient.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setMealsByIngredient', data.meals)
    })
}

