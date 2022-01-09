import { Category } from "src/component/Category/Category";
import { HeroSection } from "src/component/HeroSection/HeroSection";
import { Products } from "src/component/Products/Products";
import { FluidLayout } from "src/layout";

const Index = () => {
  return (
    <>
      <HeroSection />
      <Category />
      <Products query={undefined} products={[]} />
    </>
  );
};

Index.getLayout = FluidLayout;

export default Index;
