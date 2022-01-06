/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-handler-names */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { setRegister } from "src/services/auth";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async () => {
    const data = { name, email, phoneNumber, password };

    if (!name || !email || !phoneNumber || !password) {
      Toast.fire({
        icon: "error",
        title: "Harap isi data dengan benar!",
      });
    } else {
      const result = await setRegister(data);

      if (result.error) {
        Toast.fire({
          icon: "error",
          title: result.message,
        });
      } else {
        router.push("/login");

        Toast.fire({
          icon: "success",
          title: "Berhasil membuat akun!",
        });
      }
    }
  };

  return (
    <div className="flex flex-col py-8 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="self-center text-xl sm:text-2xl font-light text-gray-600 dark:text-white">Daftar Akun</div>
      <div className="mt-8">
        <div>
          <div className="flex flex-col mb-2">
            <div className=" flex relative">
              <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-white rounded-l-md border-t border-b border-l border-gray-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  return setName(e.target.value);
                }}
                className=" flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white rounded-r-lg border border-gray-300 focus:border-transparent shadow-sm appearance-none focus:outline-none focus:ring-yellow-star"
                placeholder="Nama"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" flex relative">
              <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-white rounded-l-md border-t border-b border-l border-gray-300 shadow-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                </svg>
              </span>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  return setEmail(e.target.value);
                }}
                className=" flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white rounded-r-lg border border-gray-300 focus:border-transparent shadow-sm appearance-none focus:outline-none focus:ring-yellow-star"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" flex relative">
              <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-white rounded-l-md border-t border-b border-l border-gray-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => {
                  return setPhoneNumber(e.target.value);
                }}
                className=" flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white rounded-r-lg border border-gray-300 focus:border-transparent shadow-sm appearance-none focus:outline-none focus:ring-yellow-star"
                placeholder="Nomor Handphone"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <div className=" flex relative">
              <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-white rounded-l-md border-t border-b border-l border-gray-300 shadow-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  return setPassword(e.target.value);
                }}
                className=" flex-1 py-2 px-4 w-full text-base placeholder-gray-400 text-gray-700 bg-white rounded-r-lg border border-gray-300 focus:border-transparent shadow-sm appearance-none focus:outline-none focus:ring-yellow-star"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="flex w-full">
            <button
              onClick={handleSubmit}
              type="submit"
              className=" py-2 px-4 w-full text-base font-semibold text-center text-black rounded-r-full rounded-l-full shadow-md transition duration-200 ease-in focus:outline-none bg-yellow-star"
            >
              Daftar
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link href="/login">
          <a className="inline-flex items-center text-sm font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            <span className="ml-2">Sudah punya akun? Login.</span>
          </a>
        </Link>
      </div>
    </div>
  );
};
