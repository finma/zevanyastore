import NumberFormat from "react-number-format";
import type { ProductTypes } from "src/type/types";

interface ProductDetailProps {
  product: ProductTypes;
  totalPrice: number;
  totalItem: number;
}

export const ProductDetail = ({ product, totalItem, totalPrice }: ProductDetailProps) => {
  return (
    <div className="mt-6 w-full">
      <h2 className="text-2xl font-bold text-black">Detail Belanja</h2>
      <div className="mt-6 space-y-3">
        <p className="flex justify-between text-lg font-normal">
          <span>Nama Produk</span>
          <span className="font-semibold">{product.name}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Kategori</span>
          <span className="font-semibold">{product.category}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Total Barang</span>
          <span className="font-semibold">{totalItem}</span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Harga Barang</span>
          <span className="font-semibold">
            <NumberFormat
              value={product.price}
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
            />
          </span>
        </p>
        <p className="flex justify-between text-lg font-normal">
          <span>Total</span>
          <span className="font-semibold">
            <NumberFormat
              value={totalPrice}
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
            />
          </span>
        </p>
      </div>
    </div>
  );
};
