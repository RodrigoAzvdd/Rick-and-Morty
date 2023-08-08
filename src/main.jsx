import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CharactersContextProvider } from './contexts/CharactersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharactersContextProvider>
      <App />
    </CharactersContextProvider>
  </React.StrictMode>,
)
