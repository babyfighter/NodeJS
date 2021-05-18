const fs = require('fs');
const zlib = require('zlib');
//transform stream(zip)
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);

const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);
