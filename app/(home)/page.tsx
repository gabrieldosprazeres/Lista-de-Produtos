import AddProductButton from "../_components/add-product-button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { productColumns } from "./_columns";
import ModeToggle from "./_components/dark-mode-button";

const Home = async () => {
  const products = await db.product.findMany({});

  return (
    <>
      <div className="flex h-full flex-col space-y-6 overflow-hidden p-2">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Produtos</h1>
          <AddProductButton userCanAddProduct />
          <ModeToggle />
        </div>
        <div className="flex-1 overflow-x-auto">
          <DataTable
            columns={productColumns}
            data={JSON.parse(JSON.stringify(products))}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
