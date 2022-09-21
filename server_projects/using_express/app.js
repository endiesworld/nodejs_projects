// const http = require('http')  // No need for this any more because we have same from Expressjs

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use('/users', (req, res, next)=>{
    res.send('<h1>Welcome to users page!</h1>')
    console.log('In the user middleware')
})

app.use('/add-product', (req, res, next)=>{
    console.log('In the add product middleware')
    res.send('<body><h1>Welcome to the add product page!</h1><form action="/product" method="POST"><input type="text" name="item" placeholder="add prodduct"></input><button type="submit"> Add </button></form></body>')
    
})

app.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next)=>{
    console.log('In the default middleware')
    res.send('<h1> Hello to home page </h1>')
})

// const server = http.createServer(app)

app.listen(3000)