// const http = require('http')  // No need for this any more because we have same from Expressjs

const express = require('express')

const app = express()

app.use((req, res, next)=>{
    console.log('In the first middleware')
    next()
})

app.use((req, res, next)=>{
    console.log('In the second middleware')
    res.send('<h1> Hello from')
})

// const server = http.createServer(app)

app.listen(3000)