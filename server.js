import config,{ nodeEnv, logStars} from './config';
import http from 'http';

const server = http.createServer((req, res) => {
    res.write('Hello \n');
    setTimeout(() => {
        res.write('I can stream!\n');
        res.end();
    }, 3000);
})
server.listen(8080);
