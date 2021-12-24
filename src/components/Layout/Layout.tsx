import React, { ReactNode } from "react";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

interface IProps {
  children: ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <div className="page">
      <Header />

      <Sidebar />

      <Content>{children}</Content>

      <Footer />
    </div>
  );
};

export default Layout;
