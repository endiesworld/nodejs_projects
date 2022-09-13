const eventEmitters = require('events')

const myEmmitter = new eventEmitters()

setImmediate(()=> myEmmitter.emit('NDUBUISI'))

myEmmitter.on('NDUBUISI', () =>{
    console.log('NDUBUISI has been fired')
})

myEmmitter.on('NDUBUISI', () =>{
    console.log('NDUBUISI has been fired')
})