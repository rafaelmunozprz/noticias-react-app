import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia';

const ListadoNoticias = ({noticias}) => {
    return (
        <Fragment>
            <div className="row">
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </div>
        </Fragment>
    );
};

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListadoNoticias;