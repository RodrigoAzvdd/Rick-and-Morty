import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorElement() {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/Rick-and-Morty/')
        }, 2000)

        return () => clearTimeout(timeout)
    }, [navigate])

    return (
        <div>
            <h1>404 - Página não encontrada</h1>
            <p>Retornando à página principal...</p>
        </div>
    )
}

export default ErrorElement
