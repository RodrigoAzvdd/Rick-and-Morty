import '../Search.css'
import { useContext, useEffect, useRef } from "react"
import { CharactersContext } from "../contexts/CharactersContext"
import CharactersCard from "../components/CharacterCard"
import { Link } from 'react-router-dom'

export default function Search() {

    const input = useRef(null)
    const select = useRef(null)
    const { getCharacters, characters, prevPage, nextPage, page, resetPages, changeSpecie, specie } = useContext(CharactersContext)

    const handleClick = () => {
        if (input.current && select) {
            changeSpecie(select.current.value)
            resetPages()
            const value = input.current.value
            getCharacters(value, specie)
        }
    }

    useEffect(() => {
        if (input.current) {
            const value = input.current.value
            getCharacters(value)
        }
    }, [page, specie])

    return (
        <div className="container">
            <Link to={'/home'}>
                    <button className='btn'>Back to Home</button>
                </Link>
            <div className='form'>
                <div className="inputOptions">
                    <select ref={select} name="species" id="species">
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
                <button onClick={handleClick} className="btn">Search</button>
            </div>

            <div className='cards'>
                {
                    characters.map(character => (
                        <CharactersCard character={character} key={character.id} />
                    ))
                }
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
        </div>
    )
}