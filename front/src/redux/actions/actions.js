import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from '../actions/actions-types';
import axios from 'axios';

export function addFavorite(character) {
    try {
        return async function(dispatch) {
            await axios.post("http://localhost:3001/rickandmorty/fav", character)
            return dispatch({
                type: ADD_FAVORITE, 
                payload: character
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFavorite = (id)=> {
    try {
        return async function(dispatch) {
            await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            return dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
        }
    } catch (error) {
        console.log(error.message);
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