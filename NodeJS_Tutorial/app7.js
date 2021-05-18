const http = require('http');
const fs = require('fs');
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/index.html')
//     res.writeHead(200,{'content-type':'text/html'});
//     readStream.pipe(res);
// }).listen(3000);

// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/example.json')
//     res.writeHead(200,{'content-type':'application/json'});
//     readStream.pipe(res);
// }).listen(3000);

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/p2.png')
    res.writeHead(200,{'content-type':'image/png'});
    readStream.pipe(res);
}).listen(3000);