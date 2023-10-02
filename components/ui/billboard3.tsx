import { Billboard } from "@/types";
import Link from "next/link";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
    data
  }) => {
    console
    return ( 
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden" style={{ maxWidth: '100%' }}>
        <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3x1 sm:text-3xl lg:text-1xl sm:max-w-xl max-w-xs text-pink-500">
              {data.label}
            </div>
            <Link href="/category/275deea3-6f33-49b8-8abf-4a13db2aa4e6">
            <button className="px-8 py-1 bg-pink-500 text-white tracking-wider uppercase font-bold">Acessar</button>
            </Link>
          </div>
        </div>
      </div>
     );
  };
  
  export default Billboard;

  