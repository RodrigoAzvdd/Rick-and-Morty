import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Search from './pages/Search'

export const router = createBrowserRouter([
    {
        index: true,
        path: '/Rick-and-Morty/home',
        element: <Home />
    },
    {
        path: '/Rick-and-Morty/search',
        element: <Search />
    }
])