const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => { //Register a Listner
    console.log('Listner found', arg);
})

logger.log('message');
