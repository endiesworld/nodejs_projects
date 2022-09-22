const path = require('path')
const express = require('express')

const rootDir =  require('../utils/path')
const router = express.Router()

router.get('/users', (req, res, next)=>{
    console.log('In the user middleware')
    res.send('<h1>Welcome to users page!</h1>')
    
})


router.get('/', (req, res, next)=>{
    console.log('In the default middleware')
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    // res.send('<h1> Hello to home page </h1>')
})

module.exports = router