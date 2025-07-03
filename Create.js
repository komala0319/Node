var fs = require('fs');
// fs. mkdir('My Folder',(err)=>{
//     if(err) throw err;
//     console.log("Folder create");
// });

// fs.unlink('My Folder/document.txt',(err)=>{
//     if(err) throw err;
//     console.log("File deleted");
// })

// fs. rmdir('My Folder',(err)=>{
//     if(err) throw err;
//     console.log("Folder Removed");
// });

// fs.readFile('My Folder/document.txt','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log("Async read:", data);
// })
// console.log("After Readfile");

fs. writeFile('document.txt','Hello Async file is update',(err)=>{
    if (err) throw err;
    console.log('file written');
})
