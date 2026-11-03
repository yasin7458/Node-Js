import http from "http";

const products = [
    {
        id: 1,
        pname: "Watch",
        price: 10000,
        brand: "fastrack"
    },
    {
        id: 2,
        pname: "gogles",
        price: 800,
        brand: "netstrop"
    }
];

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == "/") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(" Welcome To Home Page !! ");
    }
    else if (url == "/products") {
        res.writeHead(200, { "content-type": "application/json" });

        res.write(JSON.stringify({
            msg: "Connected Successfully....!!!",
            data: products
        }));
    }
    else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.write(" Page Is Not Found ?? ");
    }

    res.end();
});

server.listen(3000);