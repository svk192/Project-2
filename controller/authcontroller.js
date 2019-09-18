var exports = (module.exports = {});
exports.welcome = function(req, res) {
  res.render("welcome");
};

exports.signup = function(req, res) {
  res.render("signup", { message: req.flash('signupMessage')});
};

exports.signin = function(req, res) {
  res.render("signin", { message: req.flash('signinMessage')});
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
