import { useSelector, useDispatch } from "react-redux";

import {
  increamentCount,
  decreamentCount,
} from "../../store/slices/counterslice";

function Home() {
  const count = useSelector((state) => state.counterslice.count);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increamentCount());
  };
  const handleMinus = () => {
    dispatch(decreamentCount());
  };
  return (
    <div className="h-[100vh] bg-orange-200 flex justify-center items-center">
      <div className="bg-slate-50 w-[40%] h-[40%] flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-around sm:items-center shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
        <button
          onClick={handleMinus}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          minus
        </button>
        <h1 className="text-[56px]">{count}</h1>
        <button
          onClick={handleAdd}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          add
        </button>
      </div>
    </div>
  );
}

export default Home;
