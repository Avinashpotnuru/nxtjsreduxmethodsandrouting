import { data } from "autoprefixer";
import { useGetPostsQuery } from "../../store/api/restApis";
import CardItem from "./CardIem";

function About() {
  const { data: usersData } = useGetPostsQuery();
  // console.log(usersData);

  return (
    <div className="bg-orange-100 min-h-full ">
      {/* <CardItem /> */}
      <ul className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {usersData?.map((item) => (
          <CardItem key={item.id} usersData={item} />
        ))}
      </ul>
    </div>
  );
}

export default About;
