/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-handler-names */
import { useRouter } from "next/router";
import { useState } from "react";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearchInput = (value: string) => {
    setQuery(value);
  };

  const handleSearch = () => {
    router.push({
      pathname: "/product",
      query: { search: query.toLocaleLowerCase() },
    });
  };

  return (
    <>
      <div className=" flex relative items-center w-3/5">
        <button
          onClick={handleSearch}
          className="flex absolute justify-center items-center ml-1 w-8 h-8 text-white rounded-full bg-pastel-pink-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <input
          type="search"
          name="search"
          value={query}
          onChange={(e) => {
            return handleSearchInput(e.target.value);
          }}
          onKeyPress={(e) => {
            return e.key === "Enter" && handleSearch();
          }}
          placeholder="Cari Produk"
          className="px-5 pl-12 w-full h-12 text-base text-gray-700 bg-gray-50 rounded-r-full rounded-l-full border-none focus:ring-0 shadow-md outline-none"
        />
      </div>
    </>
  );
};
