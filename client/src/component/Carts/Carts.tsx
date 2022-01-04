import { useCart } from "react-use-cart";

import { Cart } from "./Cart";

export const Carts = () => {
  const { items } = useCart();

  return (
    <div className="m-auto w-2/3">
      <h1 className="mt-8 mb-8 text-2xl font-bold text-gray-700">Keranjang</h1>
      <div className="w-full">
        <form>
          {items.map((item) => {
            return <Cart product={item} key={item.id} />;
          })}
        </form>
      </div>
    </div>
  );
};
