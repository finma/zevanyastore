import Link from "next/link";
import type { ProductTypes } from "src/type/types";

import { CartTableRow } from "./CartTableRow";

interface TableProps {
  products: Array<ProductTypes>;
  isAction?: boolean;
}

export const CartTable = (props: Partial<TableProps>) => {
  const { products, isAction } = props;

  if (products?.length === 0) {
    return (
      <div className="mt-8 text-center">
        <h2 className=" mb-4 text-2xl font-semibold">Keranjang masih kosong</h2>
        <Link href="/">
          <a className=" py-2 px-4 w-full text-sm font-semibold text-center text-white rounded-r-full rounded-l-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none bg-pastel-blue hover:bg-pastel-blue focus:ring-pastel-blue">
            Mulai Belanja
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col m-auto lg:w-2/3">
      <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 sm:px-6 lg:px-8 min-w-full align-middle">
          <div className="overflow-hidden sm:rounded-lg border-b border-gray-200 shadow">
            <table className="min-w-full divide-y divide-gray-200 shadow-sm">
              <thead className="">
                <tr>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-left text-black">
                    Nama Barang
                  </th>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-left text-black">
                    Kategori
                  </th>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-left text-black">
                    Harga Barang
                  </th>
                  {isAction && (
                    <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-center text-black">
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                {products?.map((product) => {
                  return (
                    <CartTableRow
                      key={product._id}
                      id={product._id}
                      name={product.name}
                      price={product.price}
                      category={product.category}
                      image={product.image}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
