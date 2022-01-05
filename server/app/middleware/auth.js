export const isLoginAdmin = async (req, res, next) => {
  if (req.session.user === null || req.session.user === undefined) {
    req.flash("alertMessage", `Your session has expired, please signin`);
    req.flash("alertStatus", "danger");
    res.redirect("/");
  } else {
    next();
  }
};
