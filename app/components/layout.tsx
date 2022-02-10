import React from "react";
import styled from "styled-components";

import Icon from "./icon";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <RootWrapper>
      <Icon icon="martini" />

      {children}
    </RootWrapper>
  );
};

const RootWrapper = styled.body`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export default Layout;
