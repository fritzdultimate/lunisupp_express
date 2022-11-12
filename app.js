const http = require('http');
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received: ${name} - ${id}`);
})

customEmitter.emit('response', 'Darl', 7);

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Home Page")
    }
    if(req.url === '/about') {
        res.end("About us page")
    }

    else {
        res.end("Error page")
    }
})

server.listen(5000, () => {
    console.log("Server listening on port: 5000....")
})