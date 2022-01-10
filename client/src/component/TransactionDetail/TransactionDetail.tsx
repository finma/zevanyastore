import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { PaymentDetail } from "src/component/TransactionDetail/PaymentDetail";
import { ProductDetail } from "src/component/TransactionDetail/ProductDetail";
import type { TransactionTypes } from "src/type/types";

interface TransactionDetailProps {
  transaction: TransactionTypes;
}

export const TransactionDetail = (props: TransactionDetailProps) => {
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${props.transaction.historyProduct.image}`;

  const classStatus = cx({
    "py-3 px-6 rounded-r-full rounded-l-full": true,
    "text-green-800 bg-green-100": props.transaction.status === "success",
    "text-yellow-800 bg-yellow-100": props.transaction.status === "pending",
    "text-red-800 bg-red-100": props.transaction.status === "failed",
  });

  return (
    <main className="py-4 px-12 m-auto mb-8 w-3/5">
      <div className="flex justify-between items-center mt-7">
        <div className="flex items-center space-x-5">
          <Image
            loader={() => {
              return src;
            }}
            unoptimized
            src={src}
            alt="Product Image"
            width={200}
            height={250}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="flex flex-col">
            <span className=" text-2xl font-bold text-black">{props.transaction.historyProduct.name}</span>
            <span className="text-lg font-normal text-gray-500">
              Kategori : {props.transaction.historyProduct.category}
            </span>
          </div>
        </div>
        <div className={classStatus}>{props.transaction.status}</div>
      </div>
      <ProductDetail
        product={props.transaction.historyProduct}
        totalPrice={props.transaction.totalPrice}
        totalItem={props.transaction.totalItem}
      />
      <PaymentDetail payment={props.transaction.historyPayment} />
      <div className="m-auto w-32">
        <Link href="/transactions">
          <a className="flex justify-center items-center py-2 px-4 mt-6 text-base font-semibold text-center bg-gray-800 rounded-r-full rounded-l-full shadow-md transition duration-200 ease-in focus:outline-none text-yellow-star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            <span className="ml-2">Kembali</span>
          </a>
        </Link>
      </div>
    </main>
  );
};
