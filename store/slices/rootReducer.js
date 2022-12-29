import counterslice from "./counterslice";
import restApis from "../api/restApis";
import moviesApi from "../api/moviesApi";
const rootReducer = {
  counterslice,

  //   counter3,
  [restApis.reducerPath]: restApis.reducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
};

export default rootReducer;
