import { useContext, useEffect } from 'react'
import './App.css'
import { CharactersContext } from './contexts/CharactersContext'
import CharactersCard from './components/CharacterCard'

function App() {

  const { page, getCharacters, characters, nextPage, prevPage } = useContext(CharactersContext)

  useEffect(() => {
    getCharacters(page)
  }, [page])

  return (
    <>
      <div className="card">
        <h1>{page}</h1>
        <button onClick={prevPage}>PrevPage</button>
        <button onClick={nextPage}>NextPage</button>
        {characters.map(character => (
          <CharactersCard key={character.id} character={character} />
        ))}
      </div>
    </>
  )
}

export default App
