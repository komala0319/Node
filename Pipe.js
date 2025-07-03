var J= require('fs');
var ReadStream =J.createReadStream(__dirname +'/document.txt','utf8');
var writeStream =J.createWriteStream(__dirname +'/Pipe.txt');
// ReadStream.on ('data',function(chunk){
//     console.log("New Chunk Received!");
//     writeStream.write(chunk);
// });
ReadStream.pipe(writeStream);


