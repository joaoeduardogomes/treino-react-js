// Usamos o React Router Dom em: https://www.npmjs.com/package/react-router-dom
import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </Router>
    );
}

export default App