import React from "react";

import PropTypes from'prop-types';

const Header = ({message}) => {
    return (
        <h2 className="Header text-center">
            {message}
        </h2>
    )
}
Header.propsTypes = {
    message: PropTypes.string.isRequired
};

export default Header