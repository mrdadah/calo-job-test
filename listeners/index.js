const events = require('events');
const eventEmitter = new events.EventEmitter();

const jobCreatedResolver = require('./jobCreatedResolver')

const registerListeners = () => {
    eventEmitter.addListener('jobCreated', jobCreatedResolver);
}

module.exports = {
    registerListeners,
    eventEmitter
}