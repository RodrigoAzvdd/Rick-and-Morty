import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Search from './pages/Search'
import ErrorElement from "./pages/ErrorElement";

export const router = createBrowserRouter([
    {
        index: true,
        path: '/Rick-and-Morty/',
        element: <Home />
    },
    {
        path: '/Rick-and-Morty/search',
        element: <Search />
    },
    {
        path: '*',
        element: <ErrorElement />
    }
])