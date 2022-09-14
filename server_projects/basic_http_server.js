const http = require('http')
const url = require('url')

const person = {
    '1' : {
        id : '1',
        name: 'ndubuisi',
        age: 35,
        sex: 'male'
    }
}

const server = http.createServer()
server.on('request',(req, res)=>{
    const parsedurl = url.parse(req.url, true)
    if(req.method === 'GET' && parsedurl.pathname === '/ndubuisi'){
        const {id} = parsedurl.query
        console.log(id, typeof(id))
        console.log(person[id])
    }
})

server.listen(3000)