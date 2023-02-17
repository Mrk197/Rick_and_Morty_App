import Card from '../Card/Card.jsx';
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from '../../redux/actions/actions.js';
import './Favorites.css'

export function Favorites({favorites, close}) {
    const gender = ['Male', 'Female', 'unknown', 'Genderless', 'all'];
    const dispatch = useDispatch();
    return <div className='divFavorites'>
        <h1>FAVORITES</h1>
        <div>
            <select name='order' onChange={(e)=>dispatch(orderCards(e.target.value))}>
                <option value="ascendente">Ascendente</option>
                <option value="descendente">Descendente</option>
            </select>
            <select name='filter' onChange={(e) => dispatch(filterCards(e.target.value))}>
                {gender.map((item)=>{
                    return <option value={item}>{item}</option>
                })}
                
            </select>
        </div>
        <div className='divCard'>
            {
                favorites.map((favorite) =>{
                    return <Card 
                        detailId={favorite.id}
                        name={favorite.name}
                        species={favorite.species}
                        gender={favorite.gender}
                        image={favorite.image}
                        onClose={() => close(favorite.id)}
                        key={favorite.id}
                    />
                })
            }
        </div>
    </div>
}

export function mapStateToProps(state) {
    return {
       favorites: state.myFavorites
    }
 }

 export default connect(mapStateToProps, null)(Favorites);