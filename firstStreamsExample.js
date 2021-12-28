const {createReadStream} = require('fs');
//highWaterMark enlarges the size of the possible buffered data
const stream = createReadStream('./content/bigtext.txt', {highWaterMark:90000});

//const stream = createReadStream('../content/bigtext.txt', {encoding:'utf8'});
stream.on('data', (result)=> {
    console.log(result.length);
});