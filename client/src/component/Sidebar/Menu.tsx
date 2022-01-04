import { MenuItem } from "./MenuItem";

interface MenuProps {
  active: string;
  token: string;
}
export const Menu = (props: MenuProps) => {
  return (
    <nav className=" px-6 mt-10">
      <MenuItem active={props.active === "dashboard"} label="Overview" href="/dashboard" icon="dashboard" />
      <MenuItem
        active={props.active === "transactions"}
        label="Transaksi"
        href="/dashboard/transactions"
        icon="shopping-bag"
      />
      <MenuItem active={props.active === "cart"} label="Keranjang" href="/dashboard/carts" icon="shopping-cart" />
      <MenuItem active={props.active === "setting"} label="Setting" href="/dashboard/setting" icon="setting" />
      <MenuItem active={props.active === "logout"} label="Keluar" icon="logout" button token={props.token} />
    </nav>
  );
};
