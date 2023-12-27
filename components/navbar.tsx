import Link from "next/link";
import Image from 'next/image';

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-pink-300">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex flex-col h-30 items-center">
          <Link href="/" className="bg-white p-5 ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Mary Maria Moda Fitness</p>
            <div className="image-section">
                <Image src="/mary.jpg" alt="Mary Maria Moda Fitness" width={100} height={50} />
              </div>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;