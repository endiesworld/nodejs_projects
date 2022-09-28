// const http = require('http')  // No need for this any more because we have same from Expressjs
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use( (req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
// const server = http.createServer(app)

app.listen(3000)