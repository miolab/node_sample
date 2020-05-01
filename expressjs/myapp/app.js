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

app.listen(port, () => {
  console.log("Server starting;", `http://localhost:${port}`);
});
