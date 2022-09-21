const express = require('express')
const router = express.Router()



router.use(bodyParser.urlencoded({extended:true}))



router.use('/add-product', (req, res, next)=>{
    console.log('In the add product middleware')
    res.send('<body><h1>Welcome to the add product page!</h1><form action="/product" method="POST"><input type="text" name="item" placeholder="add prodduct"></input><button type="submit"> Add </button></form></body>')
    
})

router.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router