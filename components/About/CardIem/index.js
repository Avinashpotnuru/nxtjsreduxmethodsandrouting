import { useRouter } from "next/router";

function CardItem(props) {
  const { usersData } = props;
  const { id, name, username, email, phone } = usersData;

  const router = useRouter();

  const handleId = (id) => {
    router.push(`/about/${id}`);
  };
  return (
    <li className="bg-slate-100 m-3 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex justify-center items-center">
      <div className="flex flex-col justify-center items-center font-[700] text-center ">
        <h1>{name}</h1>
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button
          onClick={() => handleId(id)}
          className="text-white mt-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          open details
        </button>
      </div>
    </li>
  );
}

export default CardItem;
