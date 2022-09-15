const http = require('http')
const url = require('url')
//const textBody = require("body")
const jsonBody = require("body/json")
//const formBody = require("body/form")
//const anyBody = require("body/any")

const server = http.createServer()

server.on('request', (req, res)=>{
    const parsedUrl = url.parse(req.url, true)
    if(parsedUrl.pathname === '/metadata' && req.method === 'GET'){
        const {id} = parsedUrl.query
        console.log('The request query id is:', id)
        console.log('Request header is: ', req.header)
    }
    // STREAMING DATA

    // const myStreamed_data = [] 
    // req.on('data', chunk => {
    //     myStreamed_data.push(chunk)
    // }).on('end', ()=> {
    //     const parsedJSON = JSON.parse(Buffer.concat(body))
    //     const userName = parsedJSON[0]['userName']
    //     console.log(userName)
    // })

    jsonBody(req, res, (err, body)=>{
        if(err) throw err
        console.log('The request body is: ', body)
        console.log('Your user name is: ', body[0]['userName'])
    })
})

server.listen(8080)