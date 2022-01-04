/* eslint-disable @typescript-eslint/naming-convention */
import cx from "classnames";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { setLogout } from "../../services/auth";

interface MenuItemProps {
  label: string;
  href?: string;
  active?: boolean;
  button?: boolean;
  token?: string;
  icon: "dashboard" | "shopping-bag" | "shopping-cart" | "setting" | "logout";
}
export const MenuItem = (props: Partial<MenuItemProps>) => {
  const { label, href, icon, active, button, token } = props;
  const classActive = cx({
    " flex items-center p-2 my-6 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200":
      true,
    "bg-gray-100 ": active,
    "w-full": button,
  });

  const router = useRouter();

  const handleLogout = async () => {
    await setLogout(token);
    Cookies.remove("token");
    router.push("/");
  };

  if (button) {
    return (
      <button type="button" className={classActive} onClick={handleLogout}>
        <Image src={`/icons/ic-menu-${icon}.svg`} alt="dashboard" width={20} height={20} />
        <span className="mx-4 text-lg font-normal">{label}</span>
        <span className="flex-grow text-right"></span>
      </button>
    );
  }

  return (
    <Link href={`${href}`}>
      <a className={classActive}>
        <Image src={`/icons/ic-menu-${icon}.svg`} alt="dashboard" width={20} height={20} />
        <span className="mx-4 text-lg font-normal">{label}</span>
        <span className="flex-grow text-right"></span>
      </a>
    </Link>
  );
};
