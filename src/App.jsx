import { useContext, useEffect, useRef } from 'react'
import './App.css'
import { CharactersContext } from './contexts/CharactersContext'
import CharacterCard from './components/CharacterCard'

function App() {
  const input = useRef(null)
  const { getCharacters, characters, prevPage, nextPage, page, resetPages } = useContext(CharactersContext)

  const handleClick = () => {
    if (input.current) {
      resetPages()
      const value = input.current.value
      getCharacters(value)
    }
  }

  useEffect(() => {
    if (input.current) {
      const value = input.current.value
      getCharacters(value)
    }
  }, [page])

  return (
    <>
      <div className="container">
        <div className='form'>
          <input ref={input} className='input' type="text" />
          <button onClick={handleClick} className="btn">Buscar</button>
        </div>
        <div className="btns">
          <button onClick={() => {
            prevPage()
            const value = input.current.value
            getCharacters(value)
          }}>PrevPage</button>

          <button onClick={() => {
            nextPage()
            const value = input.current.value
            getCharacters(value)
          }}>NextPage</button>
        </div>
        {
          characters.map(character => (
            <CharacterCard character={character} key={character.id} />
          ))
        }
      </div>
    </>
  )
}

export default App
