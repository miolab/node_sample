const http = require("http"),
  fs = require("fs"),
  ejs = require("ejs"),
  qs = require("querystring");
const setting = require("./setting");
console.log(setting);

const server = http.createServer();
const template = fs.readFileSync(__dirname + "/public_html/index.ejs", "utf-8");

// article posts
const posts = [];

function renderForm(posts, res) {
  const data = ejs.render(template, {
    title: "Short message memorizer",
    content: "<strong>Node.js</strong> simple server.",
    posts: posts,
  });

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(data);
  res.end();
}

server.on("request", function (req, res) {
  if (req.method === "POST") {
    req.data = "";
    req.on("data", function (chunk) {
      req.data += chunk;
    });
    req.on("end", function () {
      const query = qs.parse(req.data);
      posts.push(query.name);
      renderForm(posts, res);
    });
  } else {
    renderForm(posts, res);
  }
});

server.listen(setting.port, setting.hostname);
console.log(`Server listening, ${setting.hostname}:${setting.port}`);
