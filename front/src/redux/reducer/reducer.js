 import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from '../actions/actions-types';

 const initialState = {
    myFavorites: [],
    allCharacters: []
 }

function rootReducer(state=initialState, {type, payload}){
    switch (type) {
        case ADD_FAVORITE:
            //state.myFavorites.push(actio.payload)
            return { 
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }

        case DELETE_FAVORITE:
            const actualFavorites = state.myFavorites.filter((item) => item.id !== payload);
            return {
                ...state,
                myFavorites: [...state.myFavorites, actualFavorites]
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
            break;
    
        default:
            return state;
    }
 }

 export default rootReducer;