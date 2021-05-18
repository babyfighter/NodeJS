const fs = require('fs');
// //create a file
// fs.writeFile('Example.txt',"this is an example",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Created");
//         fs.readFile('Example.txt', 'utf8', (err, file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         })
//     }
// });

//Rename File
// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Success');
//             }
// });

// fs.appendFile('Example2.txt','Some data being appended', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Success")
// });

//delete file
fs.unlink('example.txt', (err)=>{
    if(err)
        console.log(err);
    else
        console.log("Success")
});