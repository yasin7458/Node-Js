const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == "/") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(" Welcome To Home Page !!");
    }
    else if (url == "/about") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(" Welcome To About Page !!");
    }
    else if (url == "/service") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(" Welcome To Service Page !! ");
    }
    else if (url == "/blog") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(" Welcome To Blog Page !! ")
    }
    else if (url == "/contact") {
        res.writeHead(200, { "content": "text/plain" });
        res.write(" Welcome To Contact Page !! ");
    }
    else{
        res.write(" Page Is Not Found !! ")
    }

    res.end();
});

server.listen(3000);