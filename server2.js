const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('index.html', 'utf8', (err, data) => {
    console.log(err);

});



const server = http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(fileContent);

    console.log(req.method);
    


});

server.listen(8000, () => {

    console.log("Server running on 8000");


});