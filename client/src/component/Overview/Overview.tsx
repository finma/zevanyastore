import NumberFormat from "react-number-format";
import { Table } from "src/component/Table/Table";
import type { TransactionTypes } from "src/type/types";

interface OverviewProps {
  data: {
    transactions: Array<TransactionTypes>;
    totalSpent: number;
  };
}

export const Overview = (props: OverviewProps) => {
  return (
    <main className="py-16 px-12">
      <h1 className="text-4xl font-bold text-blue-900">Overview</h1>
      <div className="flex flex-col mt-6 space-y-3">
        <span className="text-xl font-normal text-gray-400">Total Pengeluaran</span>
        <span className="text-5xl font-medium text-blue-900">
          <NumberFormat
            value={props.data.totalSpent}
            prefix="Rp. "
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
          />
        </span>
      </div>
      <div className="mt-8 w-full">
        <Table transactions={props.data.transactions} />
      </div>
    </main>
  );
};
