const http = require('http')
const { type } = require('os')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    res.end("<h1>Hello World</h1>")
})


server.listen(8000,()=>{
    
})