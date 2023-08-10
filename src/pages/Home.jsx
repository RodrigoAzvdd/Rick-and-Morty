import { Link } from "react-router-dom";
import '../styles/home.css'

export default function Home() {
    return (
        <div className="Home" style={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
            minHeight: '100vh',
            alignItems: 'center',
            gap: '2rem'
        }}>
            <h1 className="title">Rick and Morty Explorer</h1>
            <Link to={'/Rick-and-Morty/search'}>
                <button className="homeBtn">Search Characters</button>
            </Link>
        </div>
    )
}