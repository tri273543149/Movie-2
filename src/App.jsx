import React, { useEffect, useCallback } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchMovieListAction } from "./store/actions/quanLyPhimAction";
import { createAction } from "./store/actions";
import setHeaders from "./helpers/setHeaders";
import { FETCH_CREDENTIALS } from "./store/constants/quanLyNguoiDungConstant";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { homeRoutes, adminRoutes } from "./routes";
import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import NotFoundLayout from "./containers/NotFound/NotFoundLayout";

function App() {
  const dispatch = useDispatch();

  const initialFetch = useCallback(() => {
    dispatch(fetchMovieListAction());
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    if (credentials) dispatch(createAction(FETCH_CREDENTIALS, credentials));

    const token = localStorage.getItem("token");
    if (!token) return;
    setHeaders(token);
  }, [dispatch]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  const showHomeLayout = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => (
        <HomeTemplate
          key={index}
          path={route.path}
          exact={route.exact}
          Component={route.component}
        />
      ));
    }
  };
  const showAdminLayout = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => (
        <AdminTemplate
          key={index}
          path={route.path}
          exact={route.exact}
          Component={route.component}
        />
      ));
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {showHomeLayout(homeRoutes)}
          {showAdminLayout(adminRoutes)}

          <Route path="" component={NotFoundLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
