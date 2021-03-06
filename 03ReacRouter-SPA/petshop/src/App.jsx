// Usamos o React Router Dom em: https://www.npmjs.com/package/react-router-dom
// pra aparecer o post, abrir a api com o comando: 'npx json-server --watch db.json --port 5000'
import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Routes é a forma nova do Switch

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';

function App() {

    return (
        <Router>
            <Cabecalho/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path='/categoria/:id/*' element={<Categoria />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="*" element={<Pagina404 />} /> {/* Qualquer caminho que não estiver nas rotas, cairá no erro por padrão */}
            </Routes>
        </Router>
    );
}

export default App