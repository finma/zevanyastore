import { useCallback, useEffect, useState } from "react";
import { getProducts } from "src/services/product";
import type { ProductTypes } from "src/type/types";

import { Card } from "./Card";

export const Products = () => {
  const [products, setProducts] = useState([])

  const getProductList = useCallback(async () => {
    const res = await getProducts()

    setProducts(res.products)
  }, [])

  useEffect(() => {
    getProductList()
  }, [getProductList])

  // if (props.query) {
  //   return props.query.search ? (
  //     <div className=" my-12 w-full">
  //       <h1 className="mb-8 text-6xl font-bold text-center text-gray-800 capitalize">
  //         {`Produk ${props.query.search}`}
  //       </h1>
  //       <div className="flex flex-wrap justify-center space-x-8">
  //         {props.products.length > 0 ? (
  //           props.products.map((item: ProductTypes) => {
  //             return <Card product={item} key={item._id} />;
  //           })
  //         ) : (
  //           <p className="text-2xl font-semibold text-gray-800">tidak ditemukan</p>
  //         )}
  //       </div>
  //     </div>
  //   ) : (
  //     <div className=" my-12 w-full">
  //       <h1 className="mb-8 text-6xl font-bold text-center text-gray-800 capitalize">{`Produk ${props.query.category}`}</h1>
  //       <div className="flex flex-wrap justify-center space-x-8">
  //         {props.products.map((item: ProductTypes) => {
  //           return <Card product={item} key={item._id} />;
  //         })}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className=" my-12 w-full">
      <h1 className="mb-8 text-6xl font-bold text-center text-gray-800 capitalize">Produk</h1>
      <div className="flex flex-wrap justify-center space-x-8">
        {products?.map((item: ProductTypes) => {
          return <Card product={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};
