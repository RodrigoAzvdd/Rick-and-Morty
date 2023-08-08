import PropTypes from 'prop-types'

CharactersCard.propTypes = {
    character: PropTypes.object
}

export default function CharactersCard({ character }) {
    return (
        <div key={character.id}>
            <h3>Name: {character.name}</h3>
            <h4>Status: {character.status}</h4>
            <h4>Specie: {character.species}</h4>
            <h4>Gender: {character.gender}</h4>
            <hr />
        </div>
    )
}