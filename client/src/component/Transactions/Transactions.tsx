import { Table } from "src/component/Table/Table";
import type { TransactionTypes } from "src/type/types";

export const Transactions = (props: { data: Array<TransactionTypes> }) => {
  return (
    <main className="py-16 px-12">
      <h1 className="text-4xl font-bold text-blue-900">Transaksi</h1>
      <div className="flex flex-col mt-6 space-y-3">
        <span className="text-xl font-normal text-gray-400">Transaksi terakhir</span>
      </div>
      <div className="mt-8 w-full">
        <Table transactions={props.data} isAction />
      </div>
    </main>
  );
};
