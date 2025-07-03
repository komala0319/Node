//Readable stream

// const K = require('fs')
// var ReadStream = K.createReadStream(__dirname +'/Example S.txt','utf8');
// ReadStream.on('data',function(chunk){
//     console.log('New Data Received');
//     console.log(chunk);
// })


// Writeable stream
// const M = require('fs')
// var writeStream = M.createWriteStream(__dirname +'/Example S.txt','utf8');
// for(let i=0; i<10; i++){
//     writeStream.write(`Line ${i+1}:Dummy data for testing Stream.\n`);
// }
//  writeStream.end(()=>{
//    console.log("Dummy file created!")  
//  })

// Append with Existing file
const M = require('fs')
var writeStream = M.createWriteStream(__dirname +'/Example S.txt',{flags:'a'});
for(let i=0; i<10; i++){
    writeStream.write(`Append${i+1}:Dummy data for testing Stream.\n`);
}
 writeStream.end(()=>{
   console.log("Append file updated!")  
 })