import Payment from "./model";

const pageName = "payment";

export const index = async (req, res) => {
  try {
    const alertMessage = req.flash("alertMessage");
    const alertStatus = req.flash("alertStatus");
    const alert = { message: alertMessage, status: alertStatus };

    const payments = await Payment.find();

    res.render("admin/payment/view_payment", {
      title: "Payment",
      payments,
      pageName,
      alert,
    });
  } catch (error) {
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/category");
  }
};

export const viewCreate = async (req, res) => {
  try {
    res.render("admin/payment/create", { title: "Create Payment", pageName });
  } catch (error) {
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/payment");
  }
};

export const actionCreate = async (req, res) => {
  try {
    const { name, bankName, noRekening, type } = req.body;

    const payment = await Payment({ name, bankName, noRekening, type });

    payment.save();

    req.flash("alertMessage", "Success create payment");
    req.flash("alertStatus", "success");

    res.redirect("/payment");
  } catch (error) {
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/payment");
  }
};
