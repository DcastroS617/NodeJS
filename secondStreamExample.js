var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    /*const text = fs.readFileSync('./content/bigtext.txt', 'utf8');
    console.log(text);
    res.end();*/
    const fileStream = fs.createReadStream('./content/bigtext.txt', 'utf8');
    fileStream.on('open', () => {
        //pushes from read stream into write stream
        fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
        console.log(err);
    });
})
.listen(6767);