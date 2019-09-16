var authController = require("../controller/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/flash", function(req, res) {
    req.flash("info", "Email already exists. Please sign in!");
    res.redirect("/");
  });

  app.get("/", authController.signup);

  app.get("/signin", authController.signin);

  app.post("/signup",passport.authenticate("local-signup", {
      successRedirect: "/index",
      failureRedirect: "/signup"
    })
  );

  app.get("/index", isLoggedIn, authController.index);

  app.get("/logout", authController.logout);

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/index",
      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
}