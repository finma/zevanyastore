import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    stock: {
      type: Number,
      require: true,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("Product", productSchema);
