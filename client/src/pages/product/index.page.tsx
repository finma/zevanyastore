import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Products } from "src/component/Products/Products";
import { FluidLayout } from "src/layout";
import { getProductsByCategory, getProductsBySearch } from "src/services/product";
import type { ProductTypes } from "src/type/types";

interface IndexProps {
  products: Array<ProductTypes>;
  query: {
    category: string;
    search: string;
  };
}

const Index = (props: IndexProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Array<ProductTypes>>([]);

  useEffect(() => {
    if (props.products) {
      setProducts(props.products);
      setIsLoading(false);
    }
  }, [props.products]);

  return isLoading ? (
    <div className="flex justify-center items-center">
      <ReactLoading type="spinningBubbles" color="#555" />
    </div>
  ) : (
    <>
      <Products products={products} query={props.query} />
      <div className="flex justify-center mb-12">
        <Link href="/">
          <a className="flex py-2 px-4 w-28 text-left text-black dark:text-gray-100 dark:hover:text-white bg-[#faaf00] dark:hover:bg-gray-600 rounded-r-full rounded-l-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            <span>Kembali</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productsBySearch = await getProductsBySearch(query.search);

  if (productsBySearch.data.data.length > 0) {
    return {
      props: {
        products: productsBySearch.data.data,
        query,
      },
    };
  }

  const products = await getProductsByCategory(query.category);

  return {
    props: {
      products: products.data.data || productsBySearch.data.data,
      query,
    },
  };
};

Index.getLayout = FluidLayout;

export default Index;
