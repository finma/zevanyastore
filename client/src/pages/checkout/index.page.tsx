/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Cookies from "js-cookie";
import type { CustomNextPage, GetServerSideProps } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChekoutConfirmation } from "src/component/CheckoutConfirmation/ChekoutConfirmation";
import { CheckoutDetailAddress } from "src/component/CheckoutDetail/CheckoutDetailAddress";
import { CheckoutDetailPayment } from "src/component/CheckoutDetail/CheckoutDetailPayment";
import { CheckoutDetailProducts } from "src/component/CheckoutDetail/CheckoutDetailProducts";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  const [image, setImage] = useState("");

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${image}`;

  useEffect(() => {
    const dataFromLocal = Cookies.get("transaction");
    const data = JSON.parse(dataFromLocal!);

    setImage(data.product.image);
  }, []);

  return (
    <>
      <div className="m-auto mt-8">
        <h1 className="mb-8 text-6xl font-bold text-center text-gray-800">Checkout</h1>
        <div className="flex flex-wrap justify-center space-x-16">
          <div className=" mt-6">
            <Image
              loader={() => {
                return src;
              }}
              unoptimized
              src={src}
              alt="Product Image"
              width={300}
              height={400}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <CheckoutDetailProducts />
            <CheckoutDetailAddress />
            <CheckoutDetailPayment />
            <ChekoutConfirmation />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { transaction } = req.cookies;

  if (!transaction) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      code: "200",
    },
  };
};

Index.getLayout = FluidLayout;

export default Index;
