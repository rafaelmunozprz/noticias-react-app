import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return (
        <Fragment>
            <nav className="nav-wrapper light-blue darken-3">
                <a href="#!" className="brand-logo center">{titulo}</a>
            </nav>
        </Fragment>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;