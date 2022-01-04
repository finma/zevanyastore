/* eslint-disable react/jsx-handler-names */
import Image from "next/image";
import NumberFormat from "react-number-format";
import { useCart } from "react-use-cart";

export const Cart = (props: { product: any }) => {
  const { product } = props;
  const { updateItemQuantity, removeItem } = useCart();

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${product.image}`;

  return (
    <label className="inline-flex items-center mt-3 w-full">
      <input type="checkbox" className=" w-5 h-5 text-blue-600 border-gray-600" />
      <div className="flex justify-between ml-4 w-full h-32">
        <div className="flex justify-between w-full">
          <div className="flex">
            <Image
              loader={() => {
                return src;
              }}
              src={src}
              alt={product.name}
              width={150}
              height={128}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className=" flex flex-col justify-center ml-5 h-full">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="">
                <NumberFormat
                  value={product.price}
                  prefix="Rp. "
                  thousandSeparator="."
                  decimalSeparator=","
                  displayType="text"
                />
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-4">
            <button
              onClick={() => {
                removeItem(product.id);
              }}
              className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-blue-600 hover:bg-gray-100 rounded-lg border-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Hapus
            </button>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  updateItemQuantity(product.id, product.quantity - 1);
                }}
                className="text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <span className=" text-lg">{product.quantity}</span>
              <button
                onClick={() => {
                  updateItemQuantity(product.id, product.quantity + 1);
                }}
                className="text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
};
