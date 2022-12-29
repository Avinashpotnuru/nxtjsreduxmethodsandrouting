import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slices/rootReducer";

import moviesApi from "./api/moviesApi";
import restApis from "./api/restApis";

import { setupListeners } from "@reduxjs/toolkit/query";

const middleware = [restApis.middleware, moviesApi.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

setupListeners(store.dispatch);

export { store };