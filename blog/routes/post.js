let posts = [
  { title: "title_0", body: "body_0" },
  { title: "title_1", body: "body_1" },
  { title: "title_2", body: "body_2" },
];

exports.index = function (req, res) {
  res.render("posts/index", { posts: posts });
};
exports.show = function (req, res) {
  res.render("posts/show", { post: posts[req.params.id] });
};
