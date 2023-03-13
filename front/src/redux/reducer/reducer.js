 import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from '../actions/actions-types';

 const initialState = {
    myFavorites: [],
    allCharacters: []
 }

function rootReducer(state=initialState, {type, payload}){
    switch (type) {
        case ADD_FAVORITE:
            return { 
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: state.allCharacters,
            }

        case DELETE_FAVORITE:
            const actualFavorites = state.myFavorites.filter( item => item.id !== payload);
            return {
                ...state,
                myFavorites: actualFavorites,
                allCharacters: actualFavorites,
            }

        case FILTER:
            const filter = state.allCharacters.filter( fav=> fav.gender === payload);
            return{
                ...state,
                myFavorites: payload === "all" ? state.allCharacters : filter
            }

        case ORDER:
            const order= state.allCharacters.sort((a,b) => a.detailId - b.detailId );

            if (payload === "ascendente") {
                return {
                    ...state,
                    myFavorites: order
                }
            }
            else if(payload === "descendente"){
                return {
                    ...state,
                    myFavorites: order.reverse()
                }
            }
    
        default:
            return state;
    }
 }

 export default rootReducer;