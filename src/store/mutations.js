import {data} from "autoprefixer";

export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || []
}
export function setSearchMealsByArea(state, meals) {
  state.searchedAreas = meals || []
}
export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || []
}
export function setMealsByIngredients(state, meals) {
  state.mealsByIngredient = meals || []
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient
}
export function setCart(state, cart) {
  state.cart = cart
}
export function openCart(state, openCart) {
  state.openCart.openCartNavbar = openCart
}