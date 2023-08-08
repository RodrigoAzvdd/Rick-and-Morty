import { createContext, useState } from "react";
import PropTypes from 'prop-types'

CharactersContextProvider.propTypes = {
    children: PropTypes.node
}

export const CharactersContext = createContext({})

export function CharactersContextProvider({ children }) {

    // btn buscar => fetch name
    // input.value == '' ?  => fetch tudo
    // prevPage ou nextPage => 

    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(null)
    const [characters, setCharacters] = useState([])

    const getCharacters = async (name) => {
        try {
            await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
                .then(async data => {
                    data = await data.json()
                    const pagesLength = data.info.pages
                    const charactersArray = data.results
                    setMaxPage(pagesLength)
                    setCharacters(charactersArray)
                })
        } catch (error) {
            alert('Character not found :(')
        }
    }

    const nextPage = () => {
        if (page < maxPage) {
            setPage(currentPage => currentPage + 1)
        }
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(currentPage => currentPage - 1)
        }
    }

    const values = {
        getCharacters,
        characters,
        page,
        nextPage,
        prevPage,
        setPage
    }

    return (
        <CharactersContext.Provider value={values}>
            {children}
        </CharactersContext.Provider>
    )
}