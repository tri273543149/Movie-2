import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <HomeNavbar />
      {props.children}
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
