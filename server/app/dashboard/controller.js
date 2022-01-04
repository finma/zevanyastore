import Category from "../category/model";

export const index = async (req, res) => {
  try {
    const categories = await Category.countDocuments();

    res.render("admin/dashboard/view_dashboard", {
      title: "Dashboard",
      categories,
    });
  } catch (error) {
    console.log(error);
  }
};
