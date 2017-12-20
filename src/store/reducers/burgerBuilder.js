import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, action) => {
    const updatedAddIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const upgradeAddIngredients = updateObject(state.ingredients, updatedAddIngredient)
    const updatedAddState = {
        ingredients: upgradeAddIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedAddState)
}

const removeIngredient = (state, action) => {
    const updatedRemoveIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const upgradeRemoveIngredients = updateObject(state.ingredients, updatedRemoveIngredient)
    const updatedRemoveState = {
        ingredients: upgradeRemoveIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedRemoveState)
}

const setIngredients = (state, action) => {
    const updatedSetState = {
        error: false,
        ingredients: action.ingredients,
        totalPrice: 4,
        building: false
    }
    return updateObject(state, updatedSetState)
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
        case actionTypes.SET_INGREDIENT: return setIngredients(state, action)
        case actionTypes.FETCH_INGREDIENT_FAILED: return fetchIngredientsFailed(state, action)
        default: return state
    }
}

export default reducer