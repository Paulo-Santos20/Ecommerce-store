import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Billboard2 from "@/components/ui/billboard2";
import Billboard3 from "@/components/ui/billboard3";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("fdc5efa9-92c6-4931-8222-ba2997a5f80a"); //Principal
  const billboard2 = await getBillboard("015ad704-8a51-45be-8cef-3a3df2f49403"); //Camisas ou Blusas
  const billboard3 = await getBillboard("f7f95cb1-f401-43a6-b884-f987a45bf14d"); //Calças

  return (
    <Container>
      <div className="pb-10">
        <Billboard 
          data={billboard}
        />
         <div className="grid grid-cols-2 ">
        <Billboard2
          data={billboard2}
        />
        <Billboard3
          data={billboard3}
        />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 text-center">
          <ProductList title="Destaques" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;