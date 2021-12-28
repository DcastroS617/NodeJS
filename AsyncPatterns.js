const server = require('http');
const {readFile, writeFile} = require('fs').promises;

const start = async()=> {
    try {
        const first = await readFile('./content/first.txt');
        const second = await readFile('./content/second.txt');
        await writeFile(
            './content/result-mind-grenade.txt', `prueba 123 ${first} ${second}`, 
            {flag:'a'});
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();

const listen = server.createServer((req, res) => {
    if(req.url === "/"){
        console.log('home page');
        res.end();
    }
    if(req.url === "/about"){
        //blocking code!
        for(let i =0; i<1000; i++){
            for(let j =0; j<1000; j++){
                console(`${i}, ${j}`);
            }
        }
        console.log('about page');
        res.end();
    }
    res.end();
});
listen.listen(6767, ()=>{
    console.log("server listening in port 6767...");
});

/*
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


getText('./content/first.txt')
.then((result) => console.log(result))
.catch(error => console.error(error));


codigo para retornar promesas.
const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err);
            }else {
                resolve(data);
            }
        });
    });
}
*/

