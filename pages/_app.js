import Navbar from "../components/navbar";
import "../styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../store/store";

import SideNavBar from "../components/Sidenavbar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <SideNavBar />
      </>
      <Component {...pageProps} />
    </Provider>
  );
}
