const express = require("express"),
  app = express(),
  port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// for Dev
const logger = require("morgan");

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

// Front page
app.get("/", (req, res) => {
  // res.send("Hello express, im.");
  res.render("index", { title: "HOME ejs" });
});

// About page
app.get("/about", (req, res) => {
  res.send("about hoge");
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
