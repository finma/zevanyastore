/* eslint-disable tailwindcss/no-custom-classname */
import Rating from "@mui/material/Rating";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import NumberFormat from "react-number-format";
import type { ProductTypes } from "src/type/types";

export const ProductDetail = (props: { product: ProductTypes }) => {
  const { product } = props;
  return (
    <div className="w-2/3">
      <h3 className="text-3xl font-medium text-black">{product.name}</h3>
      <Rating name="read-only" value={5} readOnly size="small" />
      <p className="text-3xl font-bold text-black">
        <NumberFormat
          value={product.price}
          prefix="Rp. "
          thousandSeparator="."
          decimalSeparator=","
          displayType="text"
        />
      </p>
      <p className="mt-2 text-base text-gray-600">
        Kategori :{" "}
        <Link href={`/category/${product?.category}`}>
          <a className=" font-medium text-pastel-blue">{product?.category}</a>
        </Link>
      </p>
      <div className="mt-4 text-lg text-gray-800">{ReactHtmlParser(product.description)}</div>
    </div>
  );
};
