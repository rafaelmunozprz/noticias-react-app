import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {
    //extraer noticia
    const { urlToImage, url, title, description, source } = noticia;
    const imagen = (urlToImage)
        ?
        (<div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>)
        : null
    return (
        <Fragment>
            <div className="col s12 m6 l6">
                <div className="card">
                    {imagen}
                    <div className="card-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="waves-effect waves-light button"
                        >Ver Noticia Completa</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;