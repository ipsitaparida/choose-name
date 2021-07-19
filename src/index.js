import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
    <App initialContest={window.initialData.contests}/>,
    document.getElementById('root')
);