import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Content = (props: IProps) => {
  const { children } = props;

  return <div className={"content"}>{children}</div>;
};

export default Content;
