//import styled from 'styled-components';
import styled from './SearchBar.module.css';
import React, {useState} from 'react';

/* const DivSearch = styled.div`
   display: flex;
`; */

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("");

   const handleInputChange = () => {
      let newSearch = document.getElementById('search').value;
      console.log("serch",newSearch);
      setCharacter(newSearch);
   };
   return (
      <div className={styled.divSearch}>
         <input id="search" type='search' onChange={handleInputChange} value={character} placeholder="Inserta un número"/>
         <button onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}