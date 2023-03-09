import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from '../../redux/actions/actions.js';
import {Link} from "react-router-dom";
import './Favorites.css'

export function Favorites({myFavorites}) {
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
                myFavorites.length && myFavorites.map((favorite) =>{
                    return (
                        <div className='card'>
                            <Link to={`/detail/${favorite.detailId}`}>
                            <div className='divImg'>          
                                <img  src={favorite.image} alt="img" />
                                <h2>{favorite.name}</h2>
                            </div>
                            </Link>
                            <div className='divDescription'>
                                <h3>Species: {favorite.species}</h3>
                                <h3>Gender: {favorite.gender}</h3>
                            </div>
                        </div>
                    );
                    
                })
            }
        </div>
    </div>
}

export function mapStateToProps(state) {
    return {
       myFavorites: state.myFavorites
    }
 }

 export default connect(mapStateToProps, null)(Favorites);