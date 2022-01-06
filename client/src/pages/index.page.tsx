import type { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Category } from "src/component/Category/Category";
import { HeroSection } from "src/component/HeroSection/HeroSection";
import { Products } from "src/component/Products/Products";
import { FluidLayout } from "src/layout";
import { getCategories } from "src/services/category";
import { getProducts } from "src/services/product";
import type { CategoryTypes, ProductTypes } from "src/type/types";

interface IndexProps {
  products: Array<ProductTypes>;
  categories: Array<CategoryTypes>;
}

const Index = (props: IndexProps) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [products, setProducts] = useState<Array<ProductTypes>>([]);
  // const [categories, setCategories] = useState<Array<CategoryTypes>>([]);

  // useEffect(() => {
  //   if (props.products) {
  //     setProducts(props.products);
  //     setCategories(props.categories);
  //     setIsLoading(false);
  //   }
  // }, [props.categories, props.products]);

  return (
    <>
      <HeroSection />
      {isLoading ? (
        <div className="flex justify-center items-center">
          <ReactLoading type="spinningBubbles" color="#555" />
        </div>
      ) : (
        <>
          <Category />
          <Products />
          {/* <Category categories={categories} />
          <Products products={products} /> */}
        </>
      )}
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const products = await getProducts();
//   const categories = await getCategories();

//   return {
//     props: {
//       products: products.data.data,
//       categories: categories.data,
//     },
//   };
// };

Index.getLayout = FluidLayout;

export default Index;
