/* eslint-disable tailwindcss/no-custom-classname */
import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
import NumberFormat from "react-number-format";
import type { ProductTypes } from "src/type/types";

interface CardProps {
  product: ProductTypes;
}

export const Card = (props: CardProps) => {
  const { _id, name, price, image } = props.product;
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${image}`;

  return (
    <div className=" mx-4 mb-8 rounded-2xl w-[200px]">
      <Link href={`/product/${_id}`}>
        <a>
          <div className="m-auto w-full rounded-lg">
            <Image
              loader={() => {
                return src;
              }}
              unoptimized
              src={src}
              alt={name}
              width={200}
              height={250}
              className="object-cover w-full h-full rounded-lg transition duration-200 hover:scale-[1.2]"
            />
          </div>
        </a>
      </Link>
      <div className=" rounded-lg">
        <p className=" mt-1 text-base font-bold text-gray-600">{name}</p>
        <Rating name="read-only" value={5} readOnly size="small" />
        <div className=" flex justify-between items-center">
          <p className="text-gray-800">
            <NumberFormat value={price} prefix="Rp. " thousandSeparator="." decimalSeparator="," displayType="text" />
          </p>
        </div>
      </div>
    </div>
  );
};
