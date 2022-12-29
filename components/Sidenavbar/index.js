import { navData } from "../../data";
import Link from "next/link";

import { useState } from "react";

const MobNavBar = () => {
  return (
    <nav>
      {navData.map((item) => (
        <div className="flex justify-around items-center bg-slate-500 h-[15vh] w-[100%]">
          <Link
            className="bg-transparent  hover:bg-blue-500 text-[white] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            key={item?.id}
            href={item?.link}
          >
            {item?.tabs}
          </Link>
        </div>
      ))}
    </nav>
  );
};

const Sidenavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex justify-end items-end sm:hidden "
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className=" flex flex-row justify-between items-center  bg-slate-500  border-none p-[10px] w-[100%] text-[white]">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="sm:hidden">{open ? <MobNavBar /> : ""}</div>
    </>
  );
};
export default Sidenavbar;
