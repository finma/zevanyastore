import type { CustomNextPage } from "next";
import Image from "next/image";
import { FormLogin } from "src/component/FormLogin/FormLogin";

const Index: CustomNextPage = () => {
  return (
    <div className=" container grid md:grid-cols-2 md:gap-4 min-h-screen">
      <div className="flex justify-center items-center w-full">
        <Image src="/img/onlineShopping.svg" alt="illustration" width={400} height={310} />
      </div>
      <div className="flex justify-center items-center w-full">
        <FormLogin />
      </div>
    </div>
  );
};

export default Index;
