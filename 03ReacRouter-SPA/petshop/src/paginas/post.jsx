import React, {useState, useEffect} from 'react';
import { busca } from '../api/api';
import '../assets/css/post.css';
import {useParams, useNavigate} from 'react-router-dom';

const Post = () => {
    let navegar = useNavigate(); //useNavigate é a forma nova do useHistory
    const {id} = useParams();
    const[post, setPost] = useState({})

    useEffect(() => {
        busca(`/posts/${id}`, setPost).catch(() => {
            navegar('/404'); //se for alterada a url, a renderização será redirecionada para a rota '404'
        });
    }, [id]);
    
    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="carta__texto">{post.body}</p>
            </article>
        </main>
    );
}

export default Post;