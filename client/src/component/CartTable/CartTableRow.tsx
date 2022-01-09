import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";
import { useCart } from "react-use-cart";

interface TableRowProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const CartTableRow = (props: TableRowProps) => {
  const { id, name, price, category, image } = props;
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${image}`;

  const { removeItem } = useCart();
  const router = useRouter();

  const handleDelete = () => {
    removeItem(String(id));
    router.reload();
  };

  return (
    <tr>
      <td className="py-3 px-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Image
              unoptimized
              loader={() => {
                return src;
              }}
              src={src}
              width={120}
              height={150}
              alt="thumbnail"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium text-black">{name}</div>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 whitespace-nowrap">
        <div className="text-base text-center text-gray-900">{category}</div>
      </td>
      <td className="py-3 px-4 whitespace-nowrap">
        <div className="text-base text-gray-900">
          <NumberFormat value={price} prefix="Rp. " thousandSeparator="." decimalSeparator="," displayType="text" />
        </div>
      </td>
      <td className="py-3 px-4 text-base font-medium text-center whitespace-nowrap">
        <div className="flex flex-col space-y-4">
          <Link href={`/product/${id}`}>
            <a className="py-2 px-4 w-full text-sm font-semibold text-center text-white rounded-r-full rounded-l-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-200 shadow-md transition duration-200 ease-in focus:outline-none bg-pastel-blue hover:bg-pastel-blue focus:ring-pastel-blue">
              Checkout
            </a>
          </Link>
          <button
            onClick={handleDelete}
            className="py-2 px-4 w-full text-sm font-semibold text-center bg-white hover:bg-gray-50 rounded-r-full rounded-l-full shadow-md transition duration-200 ease-in focus:outline-none text-pastel-blue"
          >
            Hapus
          </button>
        </div>
      </td>
    </tr>
  );
};
