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
        <h1>Page: {page}</h1>
        <div className="btns">
          <button onClick={prevPage}>PrevPage</button>
          <button onClick={nextPage}>NextPage</button>
        </div>
        <div className="cards">
          {
            characters.map(character => (
              <CharactersCard key={character.id} character={character} />
            ))
          }
        </div>
        <div className="btns">
          <button onClick={prevPage}>PrevPage</button>
          <button onClick={nextPage}>NextPage</button>
        </div>
      </div>
    </>
  )
}

export default App
