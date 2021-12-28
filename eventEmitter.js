const EventEmitter = require('events');
const http = require('http');
//first listen to an event, then we emitted

const customEmitter = new EventEmitter();
const server = http.createServer();

//on creates the event 
customEmitter.on('response', (name, id)=>{
    console.log(`data recieved user: ${name} with id: ${id}`);
});

customEmitter.on('response', ()=> {
    console.log('some other logic here');
});

customEmitter.on('require', ()=> {
    console.log('Require event');
});

server.on('request', (req, res)=>{
    console.log(`welcome with id: ${id}`);
    res.end();
});

//emit calls the event and it
//needs to match with the on callback
customEmitter.emit('response', 'john', 34);
customEmitter.emit('require');