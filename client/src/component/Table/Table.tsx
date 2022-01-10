import { useCallback, useEffect, useState } from "react";
import { getTransactions } from "src/services/transaction";
import type { TransactionTypes } from "src/type/types";

import { TableRow } from "./TableRow";

interface TableProps {
  token: string;
  isAction?: boolean;
}

export const Table = (props: TableProps) => {
  const [transactions, setTransactions] = useState<TransactionTypes[]>([]);

  const getTransactionList = useCallback(async () => {
    const res = await getTransactions(props.token);

    setTransactions(res.data.transactions);
  }, [props.token]);

  useEffect(() => {
    getTransactionList();
  }, [getTransactionList]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 sm:px-6 lg:px-8 min-w-full align-middle">
          <div className="overflow-hidden sm:rounded-lg border-b border-gray-200 shadow">
            <table className="min-w-full divide-y divide-gray-200 shadow-sm">
              <thead className="">
                <tr>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-left text-black">
                    Nama Barang
                  </th>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-left text-black">
                    Kategori
                  </th>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-left text-black">
                    Harga Barang
                  </th>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-left text-black">
                    Total Barang
                  </th>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-left text-black">
                    Total Harga
                  </th>
                  <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-center text-black">
                    Status
                  </th>
                  {props.isAction && (
                    <th scope="col" className=" py-3 px-4 text-lg font-medium tracking-wider text-center text-black">
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200">
                {transactions?.map((transaction, i) => {
                  return (
                    <TableRow
                      key={transaction._id}
                      id={transaction._id}
                      product={transaction.historyProduct}
                      category={transaction.historyProduct.category}
                      totalItem={transaction.totalItem}
                      totalPrice={transaction.totalPrice}
                      status={transaction.status}
                      no={i + 1}
                      isAction={props.isAction}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
