import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import axios from 'axios';


axios.get('/api/contests')
.then(resp => {
    ReactDOM.render(
        <App initialContest={resp.data.contests}/>,
        document.getElementById('root')
    )
    // this.setState({
    //     contests: resp.data.contests
    // });
})
.catch(console.error)
