// const http = require('http')  // No need for this any more because we have same from Expressjs

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use( (req, res, next)=>{
    res.status(404).send('<h1>This page is not available</h1>')
})
// const server = http.createServer(app)

app.listen(3000)