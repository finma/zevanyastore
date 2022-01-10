import type { GetServerSideProps } from "next";
import { TransactionDetail } from "src/component/TransactionDetail/TransactionDetail";
import { FluidLayout } from "src/layout";
import { getTransactionDetail } from "src/services/transaction";
import type { TransactionTypes } from "src/type/types";

interface TransactionsProps {
  transaction: TransactionTypes;
}

const Index = (props: TransactionsProps) => {
  return (
    <div className="m-auto min-h-screen">
      {/* <Sidebar active="transactions" user={props.user} /> */}
      <h1 className="mb-5 text-6xl font-bold text-center text-gray-800">Detail Transaksi</h1>
      <TransactionDetail transaction={props.transaction} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { token } = req.cookies;
  const tokenFromBase64 = Buffer.from(token, "base64").toString("binary");
  const { data } = await getTransactionDetail(tokenFromBase64, params?.transactionId);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      transaction: data,
    },
  };
};

Index.getLayout = FluidLayout;

export default Index;
