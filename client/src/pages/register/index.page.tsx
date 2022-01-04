import type { CustomNextPage } from "next";
import Image from "next/image";
import { FormRegister } from "src/component/FormRegister/FormRegister";

const Index: CustomNextPage = () => {
  return (
    <div className=" container grid md:grid-cols-2 min-h-screen">
      <div className="flex justify-center items-center w-full">
        <Image src="/img/emptyCart.svg" alt="illustration" width={400} height={310} />
      </div>
      <div className="flex justify-center items-center w-full">
        <FormRegister />
      </div>
    </div>
  );
};

export default Index;
