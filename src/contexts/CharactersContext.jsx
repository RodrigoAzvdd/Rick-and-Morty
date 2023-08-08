import { createContext, useState } from "react";
import PropTypes from 'prop-types'

CharactersContextProvider.propTypes = {
    children: PropTypes.node
}

export const CharactersContext = createContext({})

export function CharactersContextProvider({ children }) {

    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState([])

    const getCharacters = async (page) => {
        await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(async data => {
                const array = await data.json()
                setCharacters(array.results)
            })
    }

    const nextPage = () => {
        if (page < 42) {
            setPage(currentState => currentState + 1)
            getCharacters(page)
        }
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(currentState => currentState - 1)
            getCharacters(page)
        }
    }

    const values = {
        page,
        getCharacters,
        prevPage,
        nextPage,
        characters
    }

    return (
        <CharactersContext.Provider value={values}>
            {children}
        </CharactersContext.Provider>
    )
}