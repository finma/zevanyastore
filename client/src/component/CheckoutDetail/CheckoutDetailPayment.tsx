/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const CheckoutDetailPayment = () => {
  const [transaction, setTransaction] = useState({
    type: "",
    bank_name: "",
    name: "",
    no_rekening: "",
  });

  useEffect(() => {
    const dataFromLocal = Cookies.get("transaction");
    const data = JSON.parse(dataFromLocal!);

    setTransaction(data.transaction.payment_id);
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-800">Metode Pembayaran</h2>
      <div className="mt-6 space-y-3">
        <p className="flex justify-between text-lg font-normal">
          <span>Tipe Pembayaran</span>
          <span className="font-semibold">{transaction.type}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Nama Bank</span>
          <span className="font-semibold">{transaction.bank_name}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Pemilik Rekening</span>
          <span className="font-semibold">{transaction.name}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>No Rekening</span>
          <span className="font-semibold">{transaction.no_rekening}</span>
        </p>
      </div>
    </div>
  );
};
