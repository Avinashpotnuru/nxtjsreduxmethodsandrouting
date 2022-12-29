import { navData } from "../../data";
import Link from "next/link";

function Navbar() {
  return (
    <div className="hidden sm:inline-block w-[100%]">
      <ul className="flex justify-around items-center bg-slate-500 h-[15vh] w-[100%]">
        {navData.map((item) => (
          <Link
            className="bg-transparent  hover:bg-blue-500 text-[white] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            key={item?.id}
            href={item?.link}
          >
            {item?.tabs}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
