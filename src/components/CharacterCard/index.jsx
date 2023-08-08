import PropTypes from 'prop-types'
import style from './style.module.css'

CharactersCard.propTypes = {
    character: PropTypes.object
}

export default function CharactersCard({ character }) {
    return (
        <div className={style.container} key={character.id}>
            <img className={style.image} src={character.image} alt="" />
            <div className={style.info}>
                <h3 className={style.name}>{character.name}</h3>
                <h4 className={style.status}>Status: {character.status}</h4>
                <h4 className={style.specie}>Specie: {character.species}</h4>
                <h4 className={style.gender}>Gender: {character.gender}</h4>
            </div>
        </div>
    )
}