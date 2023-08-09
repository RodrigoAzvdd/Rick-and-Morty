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
                <div className={style.firstInfo}>
                    <h3 className={style.name}>{character.name}</h3>
                    <h4 className={style.status}>
                        {
                            character.status == 'Alive' ?
                                <span className={`${style.alive}`}></span>
                                :
                                <span className={`${style.notAlive}`}></span>
                        }
                        {character.status} <span className={style.specie}>- {character.species}</span>
                    </h4>
                </div>
                <span className={style.gender}>
                    {
                        character.gender == 'Female' ?
                            <i className={`bi bi-gender-female ${style.female}`}></i>
                            :
                            <i className={`bi bi-gender-male ${style.male}`}></i>
                    }
                    {character.gender}
                </span>
                <span className={style.dimension}>
                    Last known location: <span className={style.localSpan}>{character.location.name}</span>
                </span>
            </div>
        </div>
    )
}