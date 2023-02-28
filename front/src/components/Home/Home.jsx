import Cards from '../Cards/Cards.jsx'

export default function Home({characters, close}) {
    return <div>
        <div className='Tittle'>
      </div>
      <div>
        <Cards
          characters={characters}
          close={close}
        />
      </div>
    </div>
}