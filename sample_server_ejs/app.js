const http = require("http"),
  fs = require("fs"),
  ejs = require("ejs");
const setting = require("./setting");
console.log(setting);

const server = http.createServer();
const template = fs.readFileSync(__dirname + "/public_html/index.ejs", "utf-8");

let num = 0;

server.on("request", function (req, res) {
  num++;
  const data = ejs.render(template, {
    title: "Sample ejs rendering.",
    content: "<strong>Node.js</strong> simple server.",
    num: num,
  });

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(data);
  res.end();
});

server.listen(setting.port, setting.hostname);
console.log(`Server listening, ${setting.hostname}:${setting.port}`);
