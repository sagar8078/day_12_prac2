const http = require('http');

const server = http.createServer((req, res) => {

    try {

        res.statusCode = 200;
        res.write("Server running...");
        res.end();

    } catch (error) {

        res.StatusCode = 403;
    }


});

server.listen(9000, () => {
    console.log("Server running .. on the port 9000");

});