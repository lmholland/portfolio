const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
    res.writeHead(200, { "content-type": "text/html"});
    const html = fs.readFileSync("./index.html");
    res.end(html);
}).listen(8080, () => {
    console.log("running on 8080");
});
