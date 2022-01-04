import Product from "./model";
import Category from "../category/model";
import fs from "fs";
import path from "path";
import { rootPath } from "../../config";

const pageName = "product";

export const index = async (req, res) => {
  try {
    const alertMessage = req.flash("alertMessage");
    const alertStatus = req.flash("alertStatus");
    const alert = { message: alertMessage, status: alertStatus };

    const products = await Product.find().populate("category");

    res.render("admin/product/view_product", {
      title: "Product",
      products,
      pageName,
      alert,
    });
  } catch (error) {
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/product");
  }
};

export const viewCreate = async (req, res) => {
  try {
    const categories = await Category.find();

    res.render("admin/product/create", {
      title: "Create Product",
      categories,
      pageName,
    });
  } catch (error) {
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/product");
  }
};

export const actionCreate = async (req, res) => {
  try {
    const { name, stock, price, category, description } = req.body;

    if (req.file) {
      let tmp_path = req.file.path;
      let originalExt =
        req.file.originalname.split(".")[
          req.file.originalname.split(".").length - 1
        ];
      let filename = `${req.file.filename}.${originalExt}`;
      let target_path = path.resolve(rootPath, `public/uploads/${filename}`);

      const src = fs.createReadStream(tmp_path);
      const dest = fs.createWriteStream(target_path);

      src.pipe(dest);

      src.on("end", async () => {
        try {
          const product = await Product({
            name,
            stock,
            price,
            category,
            image: filename,
            description,
          });

          await product.save();

          req.flash("alertMessage", "Success create product");
          req.flash("alertStatus", "success");

          res.redirect("/product");
        } catch (error) {
          req.flash("alertMessage", `${error.message}`);
          req.flash("alertStatus", "danger");
          res.redirect("/product");
        }
      });
    } else {
      const product = await Product({
        name,
        stock,
        price,
        category,
        description,
      });

      await product.save();

      req.flash("alertMessage", "Success create product");
      req.flash("alertStatus", "success");

      res.redirect("/product");
    }
  } catch (error) {
    req.flash("alertMessage", `${error.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/product");
  }
};
