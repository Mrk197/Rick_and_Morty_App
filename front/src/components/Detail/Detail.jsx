import styles from "./Detail.module.css"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function Detail() {
    const [character, setCharacter] = useState({});
    let {detailId} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 console.log("char", char.origin.name);
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    const backToHome = () => {
        navigate("/");
    };

    return <div className={styles.divDetail}>
        <div>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Specie: {character.species}</p>
        <p>Gender: {character.gender}</p>
        
        <img src={character.image}/>
        </div>
        <button onClick={backToHome}>Regresar</button>
    </div>
}