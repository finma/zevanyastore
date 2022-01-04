import Category from "./model";

export const index = async (req, res) => {
  try {
    const categories = await Category.find();

    res.render("admin/category/view_category", {
      title: "Category",
      categories,
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewCreate = async (req, res) => {
  try {
    res.render("admin/category/create", { title: "Add Category" });
  } catch (error) {
    console.log(error);
  }
};

export const actionCreate = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await Category({ name });

    category.save();

    res.redirect("/category");
  } catch (error) {
    console.log(error);
  }
};
