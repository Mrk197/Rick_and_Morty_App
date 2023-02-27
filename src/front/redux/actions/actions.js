import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from '../actions/actions-types';

export function addFavorite(character) {
    return {
        type: ADD_FAVORITE, 
        payload: character
    }
}

export const deleteFavorite = (id)=> {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export function filterCards(gender) {
    return{
        type: FILTER, 
        payload: gender
    }
}

export function orderCards(id) {
    return{
        type: ORDER, 
        payload: id
    }
}