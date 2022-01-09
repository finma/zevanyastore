/* eslint-disable react/jsx-handler-names */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable tailwindcss/classnames-order */
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useCart } from "react-use-cart";
import { getUser } from "src/services/auth";
import { getPayments } from "src/services/payment";
import type { PaymentTypes } from "src/type/types";
import Swal from "sweetalert2";

import { PaymentItem } from "./PaymentItem";

export const ShoppingDetail = (props: { product: any }) => {
  const { product } = props;
  const { addItem } = useCart();
  const router = useRouter();

  const [token, setToken] = useState("");
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(product.price);
  const [payments, setPayments] = useState([]);
  const [paymentId, setPaymentId] = useState({});
  const [customerId, setCustomerId] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postcode, setPostcode] = useState("");

  const getPaymentList = useCallback(async () => {
    const res = await getPayments();

    setPayments(res.payments);
  }, []);

  const getUserData = useCallback(async (token) => {
    const res = await getUser(token);

    setCustomerId(res.data._id);
  }, []);

  useEffect(() => {
    const tokenBase64 = Cookies.get("token");

    if (tokenBase64) {
      const tokenFromLocal = Buffer.from(tokenBase64, "base64").toString("binary");

      getUserData(tokenFromLocal);
      setToken(tokenFromLocal);
    }

    getPaymentList();
  }, [getPaymentList, getUserData]);

  const handlePaymentChange = (payment: any) => {
    setPaymentId(payment);
  };

  const handlePlus = () => {
    if (counter > 0 && counter < product.stock) {
      setCounter(counter + 1);
      setPrice(price + product.price);
    }
  };

  const handleMin = () => {
    if (counter > 1 && counter <= product.stock) {
      setCounter(counter - 1);
      setPrice(price - product.price);
    }
  };

  const handleCart = () => {
    const newProduct = {
      id: product._id,
      ...product,
    };
    addItem(newProduct, counter);
    router.push("/cart");
  };

  const handleSubmit = () => {
    if (Object.entries(paymentId).length === 0 || address === "" || city === "" || province === "" || postcode === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Pilih Metode Pembayaran dan Isi Alamat Lengkap!",
      });
    } else {
      if (!token) {
        router.push("/login");
      } else {
        const newAddress = { address, city, province, postcode };
        const data = {
          transaction: {
            customerID: customerId,
            productID: product._id,
            paymentID: paymentId,
            categoryID: product.category,
            totalItem: counter,
            totalPrice: price,
          },
          product,
          address: newAddress,
        };

        localStorage.setItem("transaction", JSON.stringify(data));
        Cookies.set("transaction", JSON.stringify(data));

        router.push("/checkout");
      }
    }
  };

  return (
    <>
      <form className=" w-1/4 mx-6">
        <h3 className="mb-3 text-xl text-gray-800 font-medium">Alamat Lengkap</h3>
        <div className="space-y-3">
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              return setAddress(e.target.value);
            }}
            placeholder="Alamat"
            className="px-5 w-full h-12 text-base text-gray-700 bg-gray-50 rounded-r-full rounded-l-full border-none focus:ring-0 shadow-inner outline-none"
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => {
              return setCity(e.target.value);
            }}
            placeholder="Kota"
            className="px-5 w-full h-12 text-base text-gray-700 bg-gray-50 rounded-r-full rounded-l-full border-none focus:ring-0 shadow-inner outline-none"
          />
          <input
            type="text"
            name="province"
            value={province}
            onChange={(e) => {
              return setProvince(e.target.value);
            }}
            placeholder="Provinsi"
            className="px-5 w-full h-12 text-base text-gray-700 bg-gray-50 rounded-r-full rounded-l-full border-none focus:ring-0 shadow-inner outline-none"
          />
          <input
            type="text"
            name="postcode"
            value={postcode}
            onChange={(e) => {
              return setPostcode(e.target.value);
            }}
            placeholder="Kode Pos"
            className="px-5 w-full h-12 text-base text-gray-700 bg-gray-50 rounded-r-full rounded-l-full border-none focus:ring-0 shadow-inner outline-none"
          />
        </div>
      </form>
      <fieldset id="paymentMethod" className=" payment w-1/4 mx-6 box-border">
        <h3 className="mb-3 text-xl text-gray-800 font-medium">Metode Pembayaran</h3>
        {payments.map((item: PaymentTypes) => {
          return (
            <PaymentItem
              key={item._id}
              payment={item}
              onChange={() => {
                return handlePaymentChange(item);
              }}
            />
          );
        })}
      </fieldset>
      <div className=" w-1/4  mx-6">
        <h3 className="mb-3 text-xl text-gray-800 font-medium">Detail Belanja</h3>
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <button onClick={handleMin} className="text-[#faaf00]">
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
            <span className="text-xl text-gray-800">{counter}</span>
            <button onClick={handlePlus} className="text-[#faaf00]">
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
          <p className="text-base text-gray-600">
            Stok <span className="text-lg font-medium text-gray-800">{product.stock}</span>
          </p>
        </div>
        <div className="mt-6 mb-4">
          <div className="flex justify-between">
            <span className="text-base text-gray-600">Total harga</span>
            <span className="text-lg font-medium text-gray-800">
              <NumberFormat value={price} prefix="Rp. " thousandSeparator="." decimalSeparator="," displayType="text" />
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleCart}
            type="button"
            className="flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-black bg-[#faaf00] rounded-l-full rounded-r-full  shadow-md transition duration-200 ease-in focus:outline-none"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="ml-2">Masukan Keranjang</span>
          </button>
          <button
            onClick={handleSubmit}
            className=" flex justify-center items-center py-2 px-4 w-full text-base font-semibold text-center text-black bg-[#faaf00] rounded-l-full rounded-r-full  shadow-md transition duration-200 ease-in focus:outline-none"
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
            <span className="ml-2">Beli Sekarang</span>
          </button>
        </div>
      </div>
    </>
  );
};
