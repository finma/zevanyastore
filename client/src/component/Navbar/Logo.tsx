import cx from "classnames";
import Link from "next/link";

export const Logo = (props: { color: string }) => {
  const classActive = cx({
    "font-pacifico text-3xl transition duration-200 ease-in": true,
    "hover:text-pastel-pink": props.color === "pink",
    "hover:text-white": props.color === "white",
  });
  return (
    <>
      <div className="flex items-center py-2 w-1/5">
        <div className=" hidden md:flex w-full text-gray-800">
          <Link href="/">
            <a className={classActive}>Zevanyastore</a>
          </Link>
        </div>
      </div>
    </>
  );
};
