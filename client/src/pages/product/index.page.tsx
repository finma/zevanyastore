/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Products } from "src/component/Products/Products";
import { FluidLayout } from "src/layout";
import { getProductsBySearch } from "src/services/product";
import type { ProductTypes } from "src/type/types";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Array<ProductTypes>>([]);

  const router = useRouter();

  const getProductsBySearchList = useCallback(async () => {
    const res = await getProductsBySearch(router.query.search);

    if (!res.error) {
      setProducts(res.data.products);
    } else {
      setProducts([]);
    }
  }, [router.query.search]);

  useEffect(() => {
    getProductsBySearchList();
    setIsLoading(false);
  }, [getProductsBySearchList, router.query.search]);

  return isLoading ? (
    <div className="flex justify-center items-center">
      <ReactLoading type="spinningBubbles" color="#555" />
    </div>
  ) : (
    <>
      <Products products={products} query={router.query.search} />
      <div className="flex justify-center mb-12">
        <Link href="/">
          <a className="flex py-2 px-4 w-28 text-left text-black dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 rounded-r-full rounded-l-full bg-[#faaf00]">
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

Index.getLayout = FluidLayout;

export default Index;
