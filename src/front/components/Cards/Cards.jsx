import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards({characters, close}) {
   return <div className={styles.divCards}>
      {
         characters.map((character) => 
            { return <Card 
               detailId={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => close(character.id)}
               key={character.id}
            />}
         )
      }
   </div>;
}
