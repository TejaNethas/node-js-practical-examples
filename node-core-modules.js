const path = require('path');
let pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);

const fs = require('fs');
let files = fs.readdirSync('./');
console.log(files);
fs.readdir('', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
