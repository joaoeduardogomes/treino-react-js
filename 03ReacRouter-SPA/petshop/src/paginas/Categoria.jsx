import React, { useState, useEffect} from 'react';
import ListaCategorias from '../components/ListaCategorias';
import '../assets/css/blog.css';
import ListaPost from '../components/ListaPost';
import { useParams, Link } from 'react-router';
import { busca } from '../api/api';

const Categoria = () => {

    const {id} = useParams();
    //const {path} = useMatch(); //'useMatch' é a versão nova de 'useRouteMatch' --> mas não tá funcionando
    const [subcategorias, setSubcategorias] = useState([]);

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => (
            setSubcategorias(categoria.subcategorias)
        ));
    }, [id]);
    
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>

        <ListaCategorias />
        
        <ListaPost url={`/posts?categoria=${id}`} />

        </>
    )
}

export default Categoria;