var exports = (module.exports = {});
exports.welcome = function(req, res) {
  res.render("welcome");
};

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.index = function(req, res) {
  res.render("index");
};

exports.error = function(req, res) {
  res.render("404");
};
exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
