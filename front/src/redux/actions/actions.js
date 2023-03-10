import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from '../actions/actions-types';
import axios from 'axios';

export function addFavorite(character) {
    axios.post("http://localhost:3001/rickandmorty/fav", character)
    return {
        type: ADD_FAVORITE, 
        payload: character
    }
}

export const deleteFavorite = (id)=> {
    axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
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