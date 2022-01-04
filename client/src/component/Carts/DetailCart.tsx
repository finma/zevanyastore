// import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useCart } from "react-use-cart";

export const DetailCart = () => {
  const { items } = useCart();

  const totalItem = items.reduce((sum, { quantity }: any) => {
    return sum + quantity;
  }, 0);

  const totalPrice = items.reduce((sum, { itemTotal }: any): any => {
    return sum + itemTotal;
  }, 0);

  return (
    <div className=" flex justify-center items-center m-auto w-1/3">
      <div className="p-4 w-3/4 rounded-lg shadow-md">
        <h3 className="mb-3 text-lg font-medium">Detail Belanja</h3>
        <div className="my-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-400">Total barang</span>
            <span className="text-sm text-gray-400">{totalItem}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-400">Total harga</span>
            <span className="text-sm text-gray-400">
              <NumberFormat
                value={Number(totalPrice)}
                prefix="Rp. "
                thousandSeparator="."
                decimalSeparator=","
                displayType="text"
              />
            </span>
          </div>
        </div>
        <button
          type="button"
          className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>{" "}
          Beli
        </button>
      </div>
    </div>
  );
};
