import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { MusicContext } from "../../context/MusicContext";

const RedirectRuta = ({ component: Component, ...rest }) => {
  const { busqueda } = useContext(MusicContext);

  return (
    <Route {...rest}>
      {Object.keys(busqueda).length !== 0 ? <Component /> : <Redirect to="/" />}
    </Route>
  );
};

export default RedirectRuta;
