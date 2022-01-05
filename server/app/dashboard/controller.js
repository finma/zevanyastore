import Category from "../category/model";
import Product from "../product/model";

const pageName = "home";

export const index = async (req, res) => {
  try {
    const categories = await Category.countDocuments();
    const products = await Product.countDocuments();

    res.render("admin/dashboard/view_dashboard", {
      title: "Dashboard",
      categories,
      products,
      pageName,
      name: req.session.user.name,
    });
  } catch (error) {
    console.log(error);
  }
};
