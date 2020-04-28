const http = require("http"),
  fs = require("fs");
const setting = require("./setting");
console.log(setting);

const server = http.createServer();
let message;

server.on("request", function (req, res) {
  fs.readFile(__dirname + "/public_html/index.html", "utf-8", function (
    err,
    data
  ) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("Not found.");
      return res.end();
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(setting.port, setting.hostname);
console.log(`Server listening, ${setting.hostname}:${setting.port}`);
