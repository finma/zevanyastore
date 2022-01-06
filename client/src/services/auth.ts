/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";

const ROOT_API = `${process.env.NEXT_PUBLIC_API}`;

export const setRegister = async (data: any) => {
  const url = `${ROOT_API}/auth/signup`;
  const res = await axios({ url, method: "POST", data }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const setLogin = async (data: any) => {
  const url = `${ROOT_API}/auth/signin`;
  const res = await axios({ url, method: "POST", data }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const setLogout = async (token: any) => {
  const url = `${ROOT_API}/auth/logout`;
  const headers = { Authorization: token };
  const res = await axios({ url, method: "POST", headers }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getUser = async (token: any) => {
  const url = `${ROOT_API}/auth/user`;
  const headers = { Authorization: token };
  const res = await axios({ url, method: "GET", headers }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};
