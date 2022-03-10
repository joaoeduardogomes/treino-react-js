import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

function App() {

  const Router = () => {
    const location = window.location.pathname
    if(location === '/sobre') { //na página inicial ("http://localhost:3000/") aparece só a página inicial
      return <Sobre/> // No '/sobre/' ("http://localhost:3000/sobre"), aparece a página "sobre"
    }
    else {
      return <Home/>
    }
  }

  return (
  <>
    {Router()}
  </>
  )
}

export default App
