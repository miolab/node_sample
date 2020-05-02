const express = require("express"),
  app = express(),
  port = 3000,
  post = require("./routes/post");

const bodyParser = require("body-parser"),
  methodOverride = require("method-override");

// CSRF
const cookieParser = require("cookie-parser"),
  expressSession = require("express-session"),
  csrf = require("csurf");

// for Dev
const logger = require("morgan");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Middleware:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  methodOverride((req, res) => {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// CSRF
app.use(cookieParser());
app.use(expressSession({ secret: ":;lkjhgfijojhhgjkhl;k" }));
app.use(csrf());
app.use((req, res, next) => {
  res.locals.csrftoken = req.csrfToken();
  next();
});

// for Dev; Logger
app.use(logger("dev"));

// Routing
app.get("/", post.index);
app.get("/posts/:id([0-9]+)", post.show);
app.get("/posts/new", post.new);
app.post("/posts/create", post.create);
app.get("/posts/:id/edit", post.edit);
app.put("/posts/:id", post.update);
app.delete("/posts/:id/", post.destroy);

// Error
app.use((err, req, res, next) => {
  res.send(err.message);
});

app.listen(port, () => {
  console.log("Server starting;", `http://localhost:${port}`);
});
