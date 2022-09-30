const eventEmitters = require('events')

const myEmmitter = new eventEmitters()

setImmediate(()=> myEmmitter.emit('name','NDUBUISI'))

myEmmitter.on('name', (data) =>{
    console.log(`${data} has been fired`)
})

