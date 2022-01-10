import type { PaymentTypes } from "src/type/types";

export const PaymentDetail = (props: { payment: PaymentTypes }) => {
  const { payment } = props;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-black">Metode Pembayaran</h2>
      <div className="mt-6 space-y-3">
        <p className="flex justify-between text-lg font-normal">
          <span>Tipe Pembayaran</span>
          <span className="font-semibold">{payment.type}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Nama Bank</span>
          <span className="font-semibold">{payment.bankName}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Pemilik Rekening</span>
          <span className="font-semibold">{payment.name}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>No Rekening</span>
          <span className="font-semibold">{payment.noRekening}</span>
        </p>
      </div>
    </div>
  );
};
