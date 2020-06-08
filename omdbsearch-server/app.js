require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api', require('./api/router/api'));

app.use(cors());

app.on('listening', ()=>{
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});

app.on('error',error=>{
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

app.listen(port);

module.exports = app;
