import type { GetServerSideProps } from "next";
import { Table } from "src/component/Table/Table";
import { FluidLayout } from "src/layout";

const Index = (props: { token: string }) => {
  return (
    <div className=" mb-16 w-full min-h-screen">
      <h1 className="mb-8 text-6xl font-bold text-center text-gray-800">Transaksi</h1>
      <Table token={props.token} isAction />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;
  const tokenFromCookies = Buffer.from(token, "base64").toString("binary");

  if (!tokenFromCookies) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { token: tokenFromCookies },
  };
};

Index.getLayout = FluidLayout;

export default Index;
