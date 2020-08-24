import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import ScrollToTop from "./ScrollToTop";

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
        <ScrollToTop>
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        </ScrollToTop>
      )}
    />
  );
}
