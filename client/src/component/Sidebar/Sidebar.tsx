import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { UserTypes } from "src/type/types";

import { Menu } from "./Menu";
import { Profile } from "./Profile";

interface SidebarProps {
  active: string;
  user: UserTypes;
}

export const Sidebar = (props: SidebarProps) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenFromLocal = Cookies.get("token");

    if (tokenFromLocal) {
      const token = Buffer.from(tokenFromLocal, "base64").toString("binary");

      setToken(token);
    }
  }, []);

  return (
    <div className="w-1/5 h-screen bg-white">
      <Profile user={props.user} />
      <Menu active={props.active} token={token} />
      <div className="flex justify-center mt-32">
        <Link href="/">
          <a className="font-pacifico text-3xl transition duration-200 ease-in cursor-pointer">Zevanyastore</a>
        </Link>
      </div>
    </div>
  );
};
