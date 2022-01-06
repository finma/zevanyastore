/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable tailwindcss/no-custom-classname */
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ name: "" });

  const router = useRouter();

  useEffect(() => {
    const tokenFromLocal = Cookies.get("token");
    const userFromLocal = Cookies.get("user");

    if (tokenFromLocal) {
      setUser({ name: JSON.parse(userFromLocal!) });
      setIsLogin(true);
    }
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/");
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <div className="flex justify-end items-center w-1/5">
        <div className=" hidden md:flex justify-end items-center md:w-full">
          <Link href="/cart">
            <a className="flex items-center p-2 text-sm text-gray-800 hover:bg-white rounded-full transition duration-200 ease-in focus:outline-none hover:text-pastel-pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </Link>
          <div className="flex items-center">
            <div className="relative">
              <div className="inline-block relative text-left">
                <div>
                  <button
                    onClick={handleIsOpen}
                    type="button"
                    className=" flex items-center p-2 text-sm text-gray-800 hover:bg-white rounded-full transition duration-200 ease-in focus:outline-none hover:text-pastel-pink"
                    id="options-menu"
                  >
                    <svg
                      fill="currentColor"
                      className="w-7 h-7"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                    </svg>
                    <span className="ml-1 text-base">Hallo, {user.name.split(" ")[0] || user.name}</span>
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right">
                    <div className=" py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/transactions">
                        <a
                          className=" block py-2 px-4 text-gray-700 dark:text-gray-100 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-pastel-pink"
                          role="menuitem"
                        >
                          <span className="flex space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              />
                            </svg>
                            <span>Transaksi</span>
                          </span>
                        </a>
                      </Link>
                      <Link href="/">
                        <a
                          className="block py-2 px-4 text-gray-700 dark:text-gray-100 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-pastel-pink"
                          role="menuitem"
                        >
                          <span className="flex space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <span>Akun</span>
                          </span>
                        </a>
                      </Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="py-2 px-4 w-full text-left text-gray-700 dark:text-gray-100 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-pastel-pink"
                        role="menuitem"
                      >
                        <span className="flex space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          <span>Keluar</span>
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-end items-center w-1/5">
      <div className="space-x-2">
        <Link href="/login">
          <a className="py-2 px-4 w-full text-sm font-semibold text-center bg-white hover:bg-gray-50 rounded-r-full rounded-l-full shadow-md transition duration-200 ease-in focus:outline-none text-pastel-blue">
            Masuk
          </a>
        </Link>
        <Link href="/register">
          <a className=" py-2 px-4 w-full text-sm font-semibold text-center text-white rounded-r-full rounded-l-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none bg-pastel-blue hover:bg-pastel-blue focus:ring-pastel-blue">
            Daftar
          </a>
        </Link>
      </div>
    </div>
  );
};
