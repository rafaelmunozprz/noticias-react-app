import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {
    //definir categoria
    const [categoria, guardarCategoria] = useState('');
    const [noticias, guardarNoticias] = useState([]);

    useEffect(()=>{
        const consultarAPI = async () => {
            const APIKEY = 'da66f55188cc4868aa9ae5b2e3d024ec';
            const URL = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${APIKEY}`;
            const respuesta = await fetch(URL);
            const noticias = await respuesta.json();
            guardarNoticias(noticias.articles);
        };
        consultarAPI();
    },[categoria]);

    return (
        <Fragment>
            <Header
                titulo="Noticias"
            />
            <div className="container white">
                <Formulario
                    guardarCategoria={guardarCategoria}
                />
                <ListadoNoticias
                    noticias={noticias}
                />
            </div>
        </Fragment>
    );
}

export default App;
