import Category from "../category/model";
import Customer from "./model";
import Payment from "../payment/model";
import Product from "../product/model";
import Transaction from "../transaction/model";

export const createTransaction = async (req, res) => {
  try {
    const {
      customerID,
      productID,
      paymentID,
      categoryID,
      totalItem,
      totalPrice,
    } = req.body;

    const customer = await Customer.findOne({ _id: customerID });

    if (!customer) {
      return res.status(404).json({ message: "Customer not found!" });
    }

    const product = await Product.findOne({ _id: productID });

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    const payment = await Payment.findOne({ _id: paymentID });

    if (!payment) {
      return res.status(404).json({ message: "Payment not found!" });
    }

    const category = await Category.findOne({ _id: categoryID });

    if (!category) {
      return res.status(404).json({ message: "Category not found!" });
    }

    const payload = {
      historyProduct: {
        name: product._doc.name,
        category: category._doc.name,
        stock: product._doc.stock,
        price: product._doc.price,
        description: product._doc.description,
        image: product._doc.image,
      },
      historyPayment: {
        name: payment._doc.name,
        type: payment._doc.type,
        bankName: payment._doc.bankName,
        noRekening: payment._doc.noRekening,
      },
      historyCustomer: {
        name: customer._doc.name,
      },
      totalPrice,
      totalItem,
      customer: customer._doc._id,
      category: category._doc._id,
    };

    const transaction = await Transaction(payload);

    await transaction.save();

    res
      .status(201)
      .json({ error: 0, message: "checkout success", data: payload });
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};
