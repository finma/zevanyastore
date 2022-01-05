import mongoose from "mongoose";

let transactionSchema = mongoose.Schema(
  {
    historyProduct: {
      name: {
        type: String,
        require: true,
      },
      category: {
        type: String,
        require: true,
      },
      stock: {
        type: String,
        require: true,
      },
      price: {
        type: Number,
      },
      description: {
        type: String,
        require: true,
      },
      image: { type: String },
    },
    historyPayment: {
      name: {
        type: String,
        require: true,
      },
      type: {
        type: String,
        require: true,
      },
      bankName: {
        type: String,
        require: true,
      },
      noRekening: {
        type: String,
        require: true,
      },
    },
    historyCustomer: {
      name: { type: String, require: true },
    },
    name: {
      type: String,
      require: true,
      maxlength: 255,
      minlength: 3,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    totalItem: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
