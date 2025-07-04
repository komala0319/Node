var J= require('fs');
var ReadStream =J.createReadStream(__dirname +'/document.txt','utf8');
var writeStream =J.createWriteStream(__dirname +'/Pipe.txt');
// ReadStream.on ('data',function(chunk){
//     console.log("New Chunk Received!");
//     writeStream.write(chunk);
// });
ReadStream.pipe(writeStream);

//pipe in server creation
var M = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    var MyReadStream = M.createReadStream(__dirname +'/display.html','utf8');
    MyReadStream.pipe(res);
})
server.listen(3000,'127.0.0.1');
console.log("server running at port 3000");

//pipe() Json file in server creation
var K = require('fs');
const JS = require('http');
const Jsonserve = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    var jsonfile={Name:"Komala",Age:"22",Course:"BCA",place:"Chennai"}
    res.end(JSON.stringify(jsonfile))
})
Jsonserve.listen(3001,'127.0.0.1');
console.log("Server running at port 3001");

//server html and Json in the same server

var fs = require('fs');
const Hp = require('http');
const serve = Hp.createServer((req,res)=>{
    if(req.url==='/html'){
    res.writeHead(200,{'content-type':'text/html'});
    const MyReads = fs.createReadStream(__dirname +'/display.html','utf8');
    MyReads.pipe(res);
}
else if(req.url==='/json'){
    res.writeHead(200,{'content-type':'application/json'});
    const json={Name:"Komala",Age:"22",Course:"BCA",place:"Chennai"}
    res.end(JSON.stringify(json))
}
else {
    res.writeHead(404,{'content-type':'text/Italic'});
    res.end('File Not Found')
}
});
serve.listen(3002,'127.0.0.1');
console.log("Server running at port 3002");