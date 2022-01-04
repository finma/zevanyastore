import type { CategoryTypes } from "src/type/types";

import { CategoryCard } from "./CategoryCard";

export const Category = (props: { categories: Array<CategoryTypes> }) => {
  return (
    <div className="pb-6 w-full">
      <h1 className="mb-8 text-6xl font-bold text-center text-gray-800">Kategori</h1>
      <div className="flex justify-center space-x-8">
        {props.categories.map((item: CategoryTypes) => {
          return <CategoryCard label={item.name} key={item.slug} />;
        })}
      </div>
    </div>
  );
};
