import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <RootWrapper>{children}</RootWrapper>;
};

const RootWrapper = styled.body`
  max-width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`;

export default Layout;
