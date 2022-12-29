import { useGetMoviesDataQuery } from "../../store/api/moviesApi";

function Cartpage() {
  const { data: moviesData } = useGetMoviesDataQuery();
  console.log(moviesData);
  return <div>Cartpage</div>;
}

export default Cartpage;
