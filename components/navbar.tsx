import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="bg-black">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="bg-white p-6 ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Veneza Shopping</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;