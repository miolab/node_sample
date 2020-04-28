const http = require("http");
const setting = require("./setting");
console.log(setting);

let message;

const server = http.createServer();
server.on("request", function (req, res) {
  switch (req.url) {
    case "/works":
      message = "works page.";
      break;
    case "/about":
      message = "about page.";
      break;
    default:
      message = "other page.";
      break;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(message);
  res.end();
});

server.listen(setting.port, setting.hostname);
console.log(`Server listening, ${setting.hostname}:${setting.port}`);
