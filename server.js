import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express()

server.get("/", (req,res) => {
    res.send('Hello')
})
server.use(express.static('public'))
server.use('/api', apiRouter)

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port)
});
