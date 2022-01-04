import type { GetServerSideProps } from "next";
import { Table } from "src/component/Table/Table";
import { FluidLayout } from "src/layout";
import { getUser } from "src/services/auth";
import { getTransactions } from "src/services/transaction";
import type { TransactionTypes, UserTypes } from "src/type/types";

interface TransactionsProps {
  data: {
    transactions: Array<TransactionTypes>;
    totalSpent: number;
  };
  user: UserTypes;
}

const Index = (props: TransactionsProps) => {
  return (
    <div className=" mb-16 w-full min-h-screen">
      <h1 className="mb-8 text-6xl font-bold text-center text-gray-800">Transaksi</h1>
      <Table transactions={props.data.transactions} isAction />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;
  const tokenFromBase64 = Buffer.from(token, "base64").toString("binary");
  const transactions = await getTransactions(tokenFromBase64);
  const user = await getUser(tokenFromBase64);

  const totalSpent = transactions.data.reduce((acc: number, trans: TransactionTypes) => {
    return acc + trans.total_price;
  }, 0);

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
      data: {
        transactions: transactions.data,
        totalSpent,
      },
      user: user.data,
    },
  };
};

Index.getLayout = FluidLayout;

export default Index;
