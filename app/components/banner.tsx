import styled from "styled-components";
import Flex from "./flex";

type BannerProps = {
  children: JSX.Element[];
};
export default function Banner({ children }: BannerProps) {
  return (
    <Wrapper>
      <Flex justify="space-between" gap={3} wrap>
        {children}
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  padding-top: 32px;
  padding-bottom: 32px;
  left: 0;
  width: 100%;
  background-color: var(--color-brown);
  color: var(--color-cream);
  padding-inline: max(16px, 50% - 968px / 2);
`;
