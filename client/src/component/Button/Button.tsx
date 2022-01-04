export const Button = (label: string) => {
  return (
    <button className=" py-2 px-6 hover:text-white uppercase hover:bg-gray-800 rounded-full border-2 border-gray-900 transition duration-200 ease-in focus:outline-none">
      {label}
    </button>
  );
};
