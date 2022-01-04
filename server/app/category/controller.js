import Category from "./model";

const pageName = "category";

export const index = async (req, res) => {
  try {
    const categories = await Category.find();

    res.render("admin/category/view_category", {
      title: "Category",
      categories,
      pageName,
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewCreate = async (req, res) => {
  try {
    res.render("admin/category/create", { title: "Add Category", pageName });
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

export const viewEdit = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({ _id: id });

    res.render("admin/category/edit", {
      title: "Edit Category",
      category,
      pageName,
    });
  } catch (error) {
    console.log(error);
  }
};

export const actionEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await Category.findByIdAndUpdate({ _id: id }, { name });

    res.redirect("/category");
  } catch (error) {
    console.log(error);
  }
};

export const actionDelete = async (req, res) => {
  try {
    const { id } = req.params;

    await Category.findByIdAndRemove({ _id: id });

    res.redirect("/category");
  } catch (error) {
    console.log(error);
  }
};
