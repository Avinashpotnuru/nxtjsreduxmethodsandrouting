import { useGetSingleUserQuery } from "../../../store/api/restApis";

//next import
import { useRouter } from "next/router";

export default function SingleUserPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: userDetails } = useGetSingleUserQuery({
    id: id,
  });
  console.log(userDetails);

  return (
    <div className="bg-slate-400 h-[100vh] flex justify-center items-center p-3  ">
      <div className="bg-slate-200 italic flex flex-col justify-center items-center rounded-lg  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <div>
          <div className="bg-orange-100 flex justify-center rounded-lg items-center p-4 ">
            <div>
              <h1 className="font-[600] text-center mb-2 uppercase underline">
                Profile Details
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">Name : </span>
                {userDetails?.name}
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">UserName : </span>
                {userDetails?.username}
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">Email: </span>
                {userDetails?.email}
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">Phone no: </span>
                {userDetails?.phone}
              </h1>
            </div>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-2 my-2 p-3">
            <div className="bg-stone-300  h-[100%] p-4">
              <h1 className="font-[600] text-center underline mb-2 uppercase ">
                Company Details
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">Company Name : </span>
                {userDetails?.company.name}
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">CatchPhrase: </span>
                {userDetails?.company.catchPhrase}
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">Bs : </span>
                {userDetails?.company.bs}
              </h1>
            </div>
            <div className="bg-stone-300 p-4 ">
              <h1 className="font-[600] uppercase underline mb-2 text-center">
                address
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">Street : </span>
                {userDetails?.address.street}
              </h1>
              <h1 className="mb-1">
                <span className="font-[600]">City : </span>
                {userDetails?.address.city}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
