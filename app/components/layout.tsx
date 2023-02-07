import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const ref = useRef<HTMLBodyElement>();
  const [outline, setOutline] = useState("2px solid var(--color-orange)");

  useEffect(() => {
    if (!!ref?.current) {
      ref.current.addEventListener("click", () => {
        setOutline("none");
      });
    }
  });

  return (
    <RootWrapper
      ref={ref}
      style={{
        "--outline": outline,
      }}
    >
      {children}
    </RootWrapper>
  );
};

const RootWrapper = styled.body`
  max-width: 1000px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;

  & *:focus {
    outline: var(--outline);
  }

  --scrollbar-foreground: var(--color-orange);
  --scrollbar-background: var(--color-brown);
  scrollbar-color: var(--scrollbar-foreground) var(--scrollbar-background);
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scrollbar-foreground);
  }
  &::-webkit-scrollbar-track {
    background: var(--scrollbar-background);
  }
`;

export default Layout;
