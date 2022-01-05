import Customer from "../customer/model";

export const signup = async (req, res) => {
  try {
    const payload = req.body;

    const customer = await Customer({ ...payload });

    await customer.save();

    delete customer._doc.password;

    res
      .status(201)
      .json({ error: 0, message: "signup success", data: customer });
  } catch (error) {
    if (error && error.name === "ValidationError") {
      return res.status(422).json({
        error: 1,
        message: error.message,
        fields: error.errors,
      });
    }
  }
};
