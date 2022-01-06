/* eslint-disable @typescript-eslint/naming-convention */
import cx from "classnames";
import type { VFC } from "react";
import { useEffect, useState } from "react";

import { Auth } from "../component/Navbar/Auth";
import { Logo } from "../component/Navbar/Logo";
import { SearchInput } from "../component/Navbar/SearchInput";

/**
 * @package
 */
export const Header: VFC = () => {
  const [navbar, setNavbar] = useState(true);
  const [color, setColor] = useState("white");
  const classActive = cx({
    "sticky top-0 z-50 w-full transition duration-200 ease-in": true,
    "bg-pastel-white-pink": navbar,
    "bg-pastel-pink": !navbar,
  });

  const changeBackgroud = () => {
    if (window.scrollY >= 60) {
      setNavbar(false);
      setColor("white");
    } else {
      setNavbar(true);
      setColor("pink");
    }
  };

  useEffect(() => {
    changeBackgroud();
    window.addEventListener("scroll", changeBackgroud);
  }, []);
  return (
    <div className={classActive}>
      <div className=" container flex py-3 m-auto w-full">
        <Logo color={color} />
        <SearchInput />
        <Auth />
      </div>
    </div>
  );
};
