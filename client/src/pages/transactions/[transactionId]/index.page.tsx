import type { GetServerSideProps } from "next";
import { TransactionDetail } from "src/component/TransactionDetail/TransactionDetail";
import { FluidLayout } from "src/layout";
import { getUser } from "src/services/auth";
import { getTransactionDetail } from "src/services/transaction";
import type { TransactionTypes, UserTypes } from "src/type/types";

interface TransactionsProps {
  transaction: TransactionTypes;
  user: UserTypes;
}

const Index = (props: TransactionsProps) => {
  return (
    <div className="m-auto min-h-screen">
      {/* <Sidebar active="transactions" user={props.user} /> */}
      <h1 className="mb-5 text-6xl font-bold text-center text-gray-800">Detail Transaksi</h1>
      <TransactionDetail data={props} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { token } = req.cookies;
  const tokenFromBase64 = Buffer.from(token, "base64").toString("binary");
  const transaction = await getTransactionDetail(tokenFromBase64, params?.transactionId);
  const user = await getUser(tokenFromBase64);

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
      transaction: transaction.data,
      user: user.data,
    },
  };
};

Index.getLayout = FluidLayout;

export default Index;
