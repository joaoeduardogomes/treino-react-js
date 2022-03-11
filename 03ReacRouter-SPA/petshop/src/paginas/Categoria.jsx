import React from 'react';
import ListaCategorias from '../components/ListaCategorias';
import '../assets/css/blog.css';
import ListaPost from '../components/ListaPost';
import { useParams, Route, useMatch } from 'react-router';

const Categoria = () => {

    const {id} = useParams()
    const {path} = useMatch() //'useMatch' é a versão nova de 'useRouteMatch'

    
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>

        <ListaCategorias />
        <Route exact path={`${path}/`}>
            <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        </>
    )
}

export default Categoria;