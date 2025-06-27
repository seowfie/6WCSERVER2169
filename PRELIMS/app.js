var myLogModule = require('./utility/log.js');                   // log.js
myLogModule.warning('Warning node not found..')
myLogModule.error('Error: Node encountered an error..')
myLogModule.info('Node running..')

var msg = require('./utility/message.js');                       // message.js
console.log(msg)

var person = require('./utility/data.js');                       // data.js
console.log(person.firstname + ' ' + person.lastname)

// var msg = require('./utility/log.js');                              //log.js 2
// msg('Hello World');