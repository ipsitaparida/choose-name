import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from'prop-types'

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
const App = () => {
    return (
        <div className="App">
            <Header message="Naming Contests" />
            <div>
                ...
            </div>
        </div>
        
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)