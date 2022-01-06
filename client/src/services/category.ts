import axios from "axios";

const ROOT_API = `${process.env.NEXT_PUBLIC_API}`;

export const getCategories = async () => {
  const url = `${ROOT_API}/category`;
  const res = await axios({ url, method: "GET" }).catch((err: { response: any }) => {
    return err.response;
  });

  return res.data.data;
};
