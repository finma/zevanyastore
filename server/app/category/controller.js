import Category from "./model";

export const index = async (req, res) => {
  try {
    const category = [
      {
        _id: "dkfjd",
        name: "Baju",
      },
      {
        _id: "dfdsf",
        name: "Celana",
      },
    ];

    const categories = await Category.find();

    console.table(categories);

    res.render("admin/category/view_category", {
      title: "Category",
      categories,
    });
  } catch (error) {
    console.log(error);
  }
};
