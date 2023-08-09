import { createContext, useState } from "react";
import PropTypes from 'prop-types'

CharactersContextProvider.propTypes = {
    children: PropTypes.node
}

export const CharactersContext = createContext({})

export function CharactersContextProvider({ children }) {

    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(null)
    const [characters, setCharacters] = useState([])
    const [specie, setSpecie] = useState('')

    const changeSpecie = (specie) => {
        if (specie == '') {
            setSpecie('')
        } else {
            setSpecie(specie)
        }
    }

    const getCharacters = async (name) => {
        try {
            await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&species=${specie}`)
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

    const resetPages = () => {
        setPage(1)
    }

    const values = {
        getCharacters,
        characters,
        page,
        nextPage,
        prevPage,
        resetPages,
        changeSpecie,
        specie
    }

    return (
        <CharactersContext.Provider value={values}>
            {children}
        </CharactersContext.Provider>
    )
}