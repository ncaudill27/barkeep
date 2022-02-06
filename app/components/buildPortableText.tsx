import { PortableText, PortableTextComponents } from "@portabletext/react";
import styled from "styled-components";

export default function BuildPortableText({ value }: any) {
  return <PortableText value={value} components={portableTextComponents} />;
}

const portableTextComponents: PortableTextComponents = {
  list: {
    number: ({ children }) => <StyledList>{children}</StyledList>,
  },
};

const StyledList = styled.ol`
  padding-left: 16px;
`;
