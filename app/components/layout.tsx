import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <RootWrapper>{children}</RootWrapper>;
};

const RootWrapper = styled.body`
  padding-left: 16px;
  padding-right: 16px;
`;

export default Layout;