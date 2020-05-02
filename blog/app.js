const express = require("express"),
  app = express(),
  port = 3000,
  post = require("./routes/post");

const bodyParser = require("body-parser"),
  methodOverride = require("method-override");

// for Dev
const logger = require("morgan");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride());

// for Dev; Logger
app.use(logger("dev"));

// Routing
app.get("/", post.index);
app.get("/posts/:id([0-9]+)", post.show);
app.get("/posts/new", post.new);
app.post("/posts/create", post.create);
// app.get("/posts/:id/edit", post.edit);
// app.put("/posts/:id/edit", post.update);
// app.delete("/posts/:id/", post.destroy);

app.listen(port, () => {
  console.log("Server starting;", `http://localhost:${port}`);
});
