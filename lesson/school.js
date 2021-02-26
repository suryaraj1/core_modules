/* eslint-disable no-console */
const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class started');

        // raise event when bell rings
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000);
    }
}

module.exports = School;