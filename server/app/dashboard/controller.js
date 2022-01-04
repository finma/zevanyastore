import Category from "../category/model";

const pageName = "home";

export const index = async (req, res) => {
  try {
    const categories = await Category.countDocuments();

    res.render("admin/dashboard/view_dashboard", {
      title: "Dashboard",
      categories,
      pageName,
    });
  } catch (error) {
    console.log(error);
  }
};
