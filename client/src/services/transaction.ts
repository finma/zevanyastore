/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import type { CheckoutTypes } from "src/type/types";

const ROOT_API = `${process.env.NEXT_PUBLIC_API}`;

export const setTransaction = async (data: CheckoutTypes, token: any) => {
  const url = `${ROOT_API}/checkout/transaction`;
  const headers = { Authorization: token };

  const res = await axios({ url, method: "POST", data, headers }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getTransactions = async (token: any) => {
  const url = `${ROOT_API}/transaction`;
  const headers = { Authorization: token };

  const res = await axios({ url, method: "GET", headers }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getTransactionDetail = async (token: any, id: any) => {
  const url = `${ROOT_API}/transaction/detail/${id}`;
  const headers = { Authorization: token };

  const res = await axios({ url, method: "GET", headers }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};
