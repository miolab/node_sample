const express = require("express"),
  app = express(),
  port = 3000;

// Front page
app.get("/", (req, res) => {
  res.send("Hello express, im.");
});

// About page
app.get("/about", (req, res) => {
  res.send("about hoge");
});

// Users page
app.get("/users/:name", (req, res) => {
  res.send("Hello user, " + req.params.name);
});

app.listen(port, () => {
  console.log("Server starting;", `http://localhost:${port}`);
});
