const fs = require('fs')

fs.readFile(__filename, (err, data)=>{
    console.log('File data is: ', data)
})

console.log('Test')

// import { readFile } from 'fs';

// readFile(__filename, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log('Test')