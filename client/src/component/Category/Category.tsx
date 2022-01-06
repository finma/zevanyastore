import { useCallback, useEffect, useState } from "react";
import { getCategories } from "src/services/category";
import type { CategoryTypes } from "src/type/types";

import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  const [categories, setCategories] = useState([])

  const getCategoriesFromCallback = useCallback(async () => {
    const res = await getCategories()

    setCategories(res.categories)
  }, [])

  useEffect(() => {
    getCategoriesFromCallback()
  }, [getCategoriesFromCallback])

  return (
    <div className="pb-6 w-full">
      <h1 className="mb-8 text-6xl font-bold text-center text-gray-800">Kategori</h1>
      <div className="flex justify-center space-x-8">
        {categories?.map((item: CategoryTypes) => {
          return <CategoryCard label={item.name} key={item._id} />;
        })}
      </div>
    </div>
  );
};
