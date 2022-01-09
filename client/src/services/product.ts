import axios from "axios";

const ROOT_API = `${process.env.NEXT_PUBLIC_API}`;

export const getProducts = async () => {
  const url = `${ROOT_API}/product`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getProductsByCategory = async (category: string | string[] | undefined, page?: number) => {
  const url = `${ROOT_API}/products?category=${category}&page=${page}`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getProductsBySearch = async (query: any) => {
  const url = `${ROOT_API}/product/search?keyword=${query}`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};

export const getProductDetail = async (id: any) => {
  const url = `${ROOT_API}/product/detail/${id}`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data;
};
