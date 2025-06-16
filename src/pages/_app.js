import React, { useEffect } from "react";
import "../../styles/globals.css";
import "swiper/css/bundle";
import "animate.css";
import { Provider } from 'react-redux';
import store from "../redux/store";
import AOS from "aos";
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
