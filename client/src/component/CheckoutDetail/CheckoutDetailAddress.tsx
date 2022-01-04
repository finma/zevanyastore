/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const CheckoutDetailAddress = () => {
  const [data, setData] = useState({
    address: "",
    city: "",
    province: "",
    postcode: "",
  });

  useEffect(() => {
    const dataFromLocal = Cookies.get("transaction");
    const data = JSON.parse(dataFromLocal!);

    setData(data.address);
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-800">Alamat Lengkap</h2>
      <div className="mt-6 space-y-3">
        <p className="flex justify-between text-lg font-normal">
          <span>Alamat</span>
          <span className="font-semibold">{data.address}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Kota</span>
          <span className="font-semibold">{data.city}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Provinsi</span>
          <span className="font-semibold">{data.province}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Kode Pos</span>
          <span className="font-semibold">{data.postcode}</span>
        </p>
      </div>
    </div>
  );
};
