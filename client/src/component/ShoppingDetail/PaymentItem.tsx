/* eslint-disable react/jsx-handler-names */
import type { PaymentTypes } from "src/type/types";

interface PaymentItemProps {
  payment: PaymentTypes;
  onChange: () => void;
}

export const PaymentItem = (props: PaymentItemProps) => {
  const { payment, onChange } = props;

  return (
    <label htmlFor={payment.no_rekening} onChange={onChange}>
      <input
        type="radio"
        id={payment.no_rekening}
        value={payment.id}
        name="paymentMethod"
        className="hidden"
        required
      />
      <div className="box-border overflow-hidden relative p-4 mb-3 w-full bg-gray-50 rounded-2xl shadow-inner cursor-pointer detail-payment">
        <div className="w-4/6 text-gray-800">
          <p className=" mb-2 text-lg font-semibold">
            {payment.type} | {payment.bank_name}
          </p>
          <p className=" text-base">{payment.name}</p>
          <p className=" text-xl font-semibold">{payment.no_rekening}</p>
        </div>
      </div>
    </label>
  );
};
