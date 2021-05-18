const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('example2.txt');
// readStream.on('data',(chunck)=>{
//     // console.log(chunck);
//     writeStream.write(chunck);
// });

// fs.readFile('./largefile.txt',(err,file)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(file);
//     }
// })

//stream uses small buffer(in chunk), string uses small buffer
const readStream = fs.createReadStream('./largefile.txt','utf8');
readStream.on('data',(chunk)=>{
    console.log(chunk);
})

