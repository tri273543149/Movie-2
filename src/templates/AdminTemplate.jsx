import React, { Fragment } from "react";
import "./index.scss";
import { Route } from "react-router-dom";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const AdminLayout = (props) => {
  return (
    <Fragment>
      <Fragment>
        <Layout>
          <Header>
          </Header>
          <Layout>
            <Sider></Sider>
            <Content>{props.children}</Content>
          </Layout>
        </Layout>
      </Fragment>
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <AdminLayout>
          <Component {...propsComponent} />
        </AdminLayout>
      )}
    />
  );
}
