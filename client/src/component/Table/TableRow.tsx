/* eslint-disable @typescript-eslint/naming-convention */
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import NumberFormat from "react-number-format";
import type { CategoryTypes, ProductTypes } from "src/type/types";

interface TableRowProps {
  no: number;
  id: number;
  total_item: number;
  total_price: number;
  status: string;
  isAction?: boolean;
  product: ProductTypes;
  category: CategoryTypes;
}

export const TableRow = (props: TableRowProps) => {
  const { id, product, total_item, total_price, status, category, isAction } = props;
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${product.image}`;
  const classStatus = cx({
    "inline-flex px-2 text-xs font-semibold leading-5  rounded-full": true,
    "text-green-800 bg-green-100": status === "success",
    "text-yellow-800 bg-yellow-100": status === "pending",
    "text-red-800 bg-red-100": status === "failed",
  });

  return (
    <tr>
      <td className="py-3 px-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Image
              unoptimized
              loader={() => {
                return src;
              }}
              src={src}
              width={100}
              height={130}
              alt="thumbnail"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium text-black">{product.name}</div>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 whitespace-nowrap">
        <div className="text-base text-gray-900">{category.name}</div>
      </td>
      <td className="py-3 px-4 whitespace-nowrap">
        <div className="text-base text-gray-900">
          <NumberFormat
            value={product.price}
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </div>
      </td>
      <td className="py-3 px-4 whitespace-nowrap">
        <div className="text-base text-center text-gray-900">{total_item}</div>
      </td>
      <td className="py-3 px-4 whitespace-nowrap">
        <div className="text-base text-gray-900">
          <NumberFormat
            value={total_price}
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </div>
      </td>
      <td className="py-3 px-4 text-center whitespace-nowrap">
        <span className={classStatus}>{status}</span>
      </td>
      {isAction && (
        <td className="py-3 px-4 text-base font-medium text-center whitespace-nowrap">
          <Link href={`/transactions/${id}`}>
            <a className="py-2 px-4 w-full text-sm font-semibold text-center text-white bg-pastel-blue hover:bg-pastel-blue rounded-r-full rounded-l-full focus:ring-2 focus:ring-pastel-blue focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none">
              Detail
            </a>
          </Link>
        </td>
      )}
    </tr>
  );
};
