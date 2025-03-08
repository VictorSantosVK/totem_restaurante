import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <div className=" p-5 border border-red-500 rounded-xl ">
      <h1 className="  text-red-600">Produtos</h1>
      <Button>Victor Santos</Button>
      <Input placeholder="Digite algo..." />
    </div>
  );
};

export default ProductsPage;
