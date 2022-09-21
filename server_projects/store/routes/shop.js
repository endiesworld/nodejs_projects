

app.use('/users', (req, res, next)=>{
    res.send('<h1>Welcome to users page!</h1>')
    console.log('In the user middleware')
})


app.use('/', (req, res, next)=>{
    console.log('In the default middleware')
    res.send('<h1> Hello to home page </h1>')
})