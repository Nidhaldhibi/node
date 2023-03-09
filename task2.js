const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>......Hello Node......</h1>");
    res.end();
  }
});
server.listen(3000, (err) => {
  err ? console.log(error) : console.log("server is listening");
});