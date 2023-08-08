import { useContext, useEffect, useRef } from 'react'
import './App.css'
import { CharactersContext } from './contexts/CharactersContext'
import CharactersCard from './components/CharacterCard'

function App() {

  const { page, getCharacters, characters, nextPage, prevPage, filterByName } = useContext(CharactersContext)

  useEffect(() => {
    getCharacters(page)
  }, [page])

  const input = useRef()

  const handleClick = () => {
    const name = input.current.value
    filterByName(name)
  }

  return (
    <>
      <div className="card">
        <h1>Page: {page}</h1>
        <div>
          <input ref={input} className='input' type="text" />
          <button onClick={handleClick} className="btn">Buscar</button>
        </div>
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
