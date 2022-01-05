import Transaction from "./model";

const pageName = "transaction";

export const index = async (req, res) => {
  try {
    const alertMessage = req.flash("alertMessage");
    const alertStatus = req.flash("alertStatus");
    const alert = { message: alertMessage, status: alertStatus };

    const transactions = await Transaction.find();

    console.log(transactions);

    res.render("admin/transaction/view_transaction", {
      title: "Transaction",
      name: req.session.user.name,
      transactions,
      pageName,
      alert,
    });
  } catch (error) {
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/transaction");
  }
};
