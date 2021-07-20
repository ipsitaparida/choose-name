// fetch the data from api
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './src/components/App';

import axios from "axios";
import config from './config';


const serverRender = () => 
    axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
        return {
            initialMarkup: ReactDOMServer.renderToString(
            <App initialData={resp.data} />
        ),
        initialData: resp.data
        }
    });

export default serverRender;