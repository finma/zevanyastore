/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import { ProductDetail } from "src/component/ShoppingDetail/ProductDetail";
import { ShoppingDetail } from "src/component/ShoppingDetail/ShoppingDetail";
import { FluidLayout } from "src/layout";
import { getProductDetail, getProducts } from "src/services/product";
import type { ProductTypes } from "src/type/types";

const Index = (props: { product: ProductTypes }) => {
  const { product } = props;
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  const src = `${API_IMG}/${product.image}`;
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2 my-10 font-favfont">
        <div className="flex justify-center w-full">
          <div>
            <Image
              loader={() => {
                return src;
              }}
              src={src}
              alt="kucing"
              className="object-cover rounded-xl"
              width={300}
              height={400}
              unoptimized
            />
          </div>
        </div>
        <div className="">
          <ProductDetail product={props.product} />
        </div>
      </div>
      <div className=" flex justify-center my-8">
        <ShoppingDetail product={props.product} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const { data } = await getProducts();
  const paths = data.products.map((product: ProductTypes) => {
    return {
      params: {
        productId: product._id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

interface GetStaticProps {
  params: {
    productId: string;
  };
}

export const getStaticProps = async ({ params }: GetStaticProps) => {
  const { productId } = params;
  const { data } = await getProductDetail(productId);

  return {
    props: { product: data.product },
  };
};

Index.getLayout = FluidLayout;

export default Index;
