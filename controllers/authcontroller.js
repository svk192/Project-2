var exports = (module.exports = {});

exports.register = function(req, res) {
  res.render("register");
};

exports.login = function(req, res) {
  res.render("login");
};

exports.index = function(req, res) {
  res.render("index");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    // eslint-disable-next-line curly
    if (err) throw err;
    res.redirect("/");
  });
};