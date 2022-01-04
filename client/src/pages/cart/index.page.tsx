/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { CustomNextPage, GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { CartTable } from "src/component/CartTable/CartTable";
import { FluidLayout } from "src/layout";

const Index: CustomNextPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("react-use-cart")!);

    setProducts(cart.items);
  }, []);

  return (
    <>
      <div className=" mb-16 w-full min-h-screen">
        <h1 className="mb-8 text-6xl font-bold text-center text-gray-800">Keranjang</h1>
        <CartTable products={products} isAction />
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

  return {
    props: {},
  };
};

Index.getLayout = FluidLayout;

export default Index;
