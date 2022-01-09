/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-handler-names */
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setTransaction } from "src/services/transaction";
import Swal from "sweetalert2";

export const ChekoutConfirmation = () => {
  const [token, setToken] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const tokenFromLocal = Cookies.get("token");

    if (tokenFromLocal) {
      const token = Buffer.from(tokenFromLocal, "base64").toString("binary");

      setToken(token);
    }
  }, []);

  const handleSubmit = async () => {
    if (!checkbox) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan lakukan pembayaran!",
      });
    } else {
      const dataFromLocal = Cookies.get("transaction");
      const data = JSON.parse(dataFromLocal!);
      const { productID, paymentID, totalItem, totalPrice } = data.transaction;
      const transaction = {
        productID,
        paymentID,
        totalItem,
        totalPrice,
        address: data.address,
      };

      const result = await setTransaction(transaction, token);

      if (result.error) {
        Swal.fire({
          icon: "error",
          title: "Transaksi Error!",
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Transaksi Berhasil!",
          timer: 3000,
        });

        router.push("/");
        Cookies.remove("transaction");
      }
    }
  };

  const handleBack = () => {
    router.back();
    Cookies.remove("transaction");
  };

  return (
    <div className="mt-10 mb-16">
      <label className="flex items-center mb-10 text-lg">
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => {
            return setCheckbox(!checkbox);
          }}
          className="w-5 h-5 text-[#faaf00]"
        />
        <span className="block ml-3 font-medium cursor-pointer">Sudah melakukan pembayaran?</span>
      </label>
      <div className="flex flex-wrap space-x-4">
        <button
          onClick={handleBack}
          className=" flex justify-center items-center py-2 px-4 text-base font-semibold text-center bg-gray-800 rounded-r-full rounded-l-full shadow-md transition duration-200 ease-in focus:outline-none text-[#faaf00]"
        >
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
        </button>
        <button
          onClick={handleSubmit}
          className=" flex justify-center items-center py-2 px-4 text-base font-semibold text-center text-black rounded-r-full rounded-l-full shadow-md transition duration-200 ease-in focus:outline-none bg-[#faaf00]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="ml-2">Konfirmasi Pembayaran</span>
        </button>
      </div>
    </div>
  );
};
