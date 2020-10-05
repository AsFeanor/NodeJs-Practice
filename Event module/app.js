const Logger = require('./logger')
const logger = new Logger();

// add listener
logger.on('connection', function (args){
    console.log('baglanti kuruldu.', args);
})

logger.log('altugege login oldu')
