const http = require('http')
const url = require('url')
//const textBody = require("body")
const jsonBody = require("body/json")
const { resolve } = require('path')
//const formBody = require("body/form")
//const anyBody = require("body/any")

const server = http.createServer()

const server_data = {
            id: 001,
            unerName: 'Emmanuel Okoro',
            age: 35
        }

server.on('request', (req, res)=>{
    const parsedUrl = url.parse(req.url, true)
    if(parsedUrl.pathname === '/metadata' && req.method === 'GET'){
        const {id} = parsedUrl.query
        console.log('The request query id is:', id)
        console.log('Request header is: ', req.header)

        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        const serialized_data = JSON.stringify(server_data)
        res.write(serialized_data)
        res.end()
    }

    else if(parsedUrl.pathname === '/user' && req.method === 'GET'){
        jsonBody(req, res, (err, body)=>{
        if(err) throw err
        console.log('The request body is: ', body)
        console.log('Your user name is: ', body[0]['userName'])
    })
    }

    else{
        console.log('unavailable url')
        res.statusCode = 404
        res.setHeader('X-powered-by', 'Nodejs')
        res.setHeader('Hello', 'world')
        res.end()
    }
   
})

server.listen(8080)