const express = require("express"),
  app = express(),
  port = 3000;
const bodyParser = require("body-parser");

// for Dev
const logger = require("morgan");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for Dev; Logger
app.use(logger("dev"));

// File read (use middleware; file in public/)
// e.g) http://localhost:3000/test2.txt
app.use(express.static(__dirname + "/public"));

// Custom middleware example
app.use((req, res, next) => {
  console.log("This is custom middleware.");
  next();
});

// GET & POST
app.get("/form", (req, res) => {
  /* Usage example
  http://localhost:3000/form
  */
  res.render("form");
});
app.post("/create", (req, res) => {
  res.send(req.body.name);
});

// Use params
app.param("id", (req, res, next, id) => {
  let users = ["im", "cat", "dog", "snake"];
  req.params.name = users[id];
  next();
});
app.get("/hello/:id", (req, res) => {
  /* Usage example
  http://localhost:3000/hello/0
  (result: "Hello, im")
  */
  res.send("Hello, " + req.params.name);
});
app.get("/bye/:id", (req, res) => {
  /* Usage example
  http://localhost:3000/bye/2
  (result: "Bye, dog")
  */
  res.send("Bye, " + req.params.name);
});

// Front page (render)
app.get("/", (req, res) => {
  res.render("index", { title: "HOME ejs" });
});

// Users page
app.get("/users/:name?", (req, res) => {
  if (req.params.name) {
    res.send("Hello user, " + req.params.name);
  } else {
    res.send("Hello user, someone");
  }
});

// Items page
app.get("/items/:id([0-9]+)", (req, res) => {
  res.send("Item number, " + req.params.id);
});

/* File read (Direct read)
    e.g) http://localhost:3000/test.txt
app.get("/test.txt", (req, res) => {
  res.sendfile(__dirname + "/public/test.txt");
});
*/

app.listen(port, () => {
  console.log("Server starting;", `http://localhost:${port}`);
});
