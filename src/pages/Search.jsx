import '../styles/search.css'
import { useContext, useEffect, useRef } from "react";
import { CharactersContext } from "../contexts/CharactersContext";
import CharactersCard from "../components/CharacterCard";

export default function Search() {
     const input = useRef(null);
     const select = useRef(null);
     const { getCharacters, characters, prevPage, nextPage, page, resetPages, changeSpecie, specie } = useContext(CharactersContext)

     const showCharacters = () => {
          if (input.current && select.current) {
               changeSpecie(select.current.value)
               resetPages()
               const value = input.current.value
               getCharacters(value, specie)
               scrollToTop()
          }
     }

     const scrollToTop = () => {
          const cardDiv = document.querySelector(".cards")
          if (cardDiv) {
               cardDiv.scrollTop = 0
          }
     };

     useEffect(() => {
          showCharacters()
     }, [page, specie, select])

     return (
          <div className="container">
               <h1 className="searchTitle">Search Page</h1>
               <form method='get' onSubmit={ev => ev.preventDefault()} className='form'>
                    <div className="inputOptions">
                         <select ref={select} onChange={showCharacters} name="species" id="species">
                              <option disabled>Select an Option</option>
                              <option value={''}>All Species</option>
                              <option value={'Human'}>Human</option>
                              <option value={'Alien'}>Alien</option>
                              <option value={'Humanoid'}>Humanoid</option>
                              <option value={'Robot'}>Robot</option>
                              <option value={'Poopybutthole'}>Poopybutthole</option>
                              <option value={'Mythological Creature'}>Mythological Creature</option>
                              <option value={'Animal'}>Animal</option>
                              <option value={'Cronenberg'}>Cronenberg</option>
                              <option value={'Disease'}>Disease</option>
                         </select>

                         <input ref={input} className='input' type="text" placeholder={`Character Name`} />
                    </div>
                    <button onClick={showCharacters} className="searchBtn">Search</button>
               </form>

               <div className='cards'>
                    {
                         characters.map(character => (
                              <CharactersCard character={character} key={character.id} />
                         ))
                    }
               </div>

               <div className="arrows">
                    <i className='bi bi-arrow-left-short' onClick={() => {
                         prevPage()
                         const value = input.current.value
                         getCharacters(value)
                         scrollToTop()
                    }}></i>
                    <span className='pageCounter'>{page}</span>
                    <i className='bi bi-arrow-right-short' onClick={() => {
                         nextPage()
                         const value = input.current.value
                         getCharacters(value)
                         scrollToTop()
                    }}></i>
               </div>
          </div>
     )
}