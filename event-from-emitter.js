const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(msg) {
        console.log(msg);
        this.emit('messageLogged', { id: 1, url: 'http://' }); //Raise an event
    }
}

// console.log(__dirname);
// console.log(__filename);
// var url = "https://jsonplaceholder.typicode.com/";

module.exports = Logger;
