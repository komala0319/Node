const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("Successfull!");
})
server.listen(3000,'127.0.0.1');
console.log("Server running at the port 3000");


