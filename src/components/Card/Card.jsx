import styles from './Card.module.css';
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from '../../redux/actions/actions';

function Card(props) {
   const [isfav, setIsFav] = useState(false);


   function handleFavorite() {
      if (isfav) {
         setIsFav(false);
         console.log('isFAV', isfav);
         props.deleteFavorite(props.detailId);
      }
      else{
         setIsFav(true);
         console.log('isFAV', isfav);
         props.addFavorite(props);
      }
   }

   useEffect(() => {
      console.log("favorites", props.myFavorites);
      props.myFavorites.forEach((fav) => {
         if (fav.detailId === props.detailId) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]); 

   return (
      <div className={styles.card}>
         <div className={styles.divButtons}>
         {
            isfav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={props.onClose}>X</button>
         </div>
         <Link to={`/detail/${props.detailId}`}>
         <div className={styles.divImg}>          
            <img  src={props.image} alt="img" />
            <h2>{props.name}</h2>
         </div>
         </Link>
         <div className={styles.divDescription}>
            <h3>Species: {props.species}</h3>
            <h3>Gender: {props.gender}</h3>
         </div>
      </div>
   );
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: function (character) {
         dispatch(addFavorite(character));
      },
      deleteFavorite: function (id) {
         dispatch(deleteFavorite(id));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);