/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import { useRouter } from "next/router";

export const CategoryCard = (props: { label: string }) => {
  const { label } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/product",
      query: { search: label.toLocaleLowerCase() },
    });
  };

  return (
    <div className="w-[200px] h-[250px]" onClick={handleClick}>
      <div className="flex relative justify-center items-center w-full">
        <h3 className="absolute z-10 py-2 px-6 text-xl font-medium text-center text-gray-700 capitalize bg-white rounded-r-full rounded-l-full shadow-md">
          {label}
        </h3>
        <Image
          src={`/img/${label}.jpg`}
          alt={label}
          width={200}
          height={250}
          className="object-cover w-full rounded-lg hover:rounded-lg shadow-lg filter hover:blur-sm transition duration-200 hover:scale-110 contrast-90 brightness-90"
        />
      </div>
    </div>
  );
};
