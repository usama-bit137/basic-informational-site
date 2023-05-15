// server file
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader("Content-Type", "text/html")

    let path = "./views/";
    switch(req.url) {
        case "/":
            path += "index.html"
            res.statusCode = 200
            break
        case "/about": 
            path += "about.html"
            res.statusCode = 200
            break
        case "/contact":
            path += "contact-me.html"
            res.statusCode = 200; // OK
            break
        case "/contact-me": // page redirect!
            res.statusCode = 301
            res.setHeader("Location", "/contact")
            res.end()
        default: 
            path += "404.html"   
            res.statusCode = 404; // Resource does not exist
            break;
    }

    // send an HTML file: 
    fs.readFile(`${path}`, (err, data) => {
        if (err) console.log(err);
        else { 
            res.end(data)
        }
    })
})

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
}) 