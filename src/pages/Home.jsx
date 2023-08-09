import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="Home" style={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
            minHeight: '100vh',
            alignItems: 'center',
            gap: '5rem'
        }}>
            <h1>Rick & Morty API</h1>
            <Link to={'/search'}>
                <button>Search Characters</button>
            </Link>
        </div>
    )
}