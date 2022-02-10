import styled from "styled-components";
import MartiniIcon from "./iconMartini";

type IconProps = {
  icon: "martini";
};

export default function Icon({ icon }: IconProps) {
  let Tag;

  switch (icon) {
    case "martini":
      Tag = MartiniIcon;
      break;

    default:
      throw new Error("Icon Error: Invalid icon prop supplied");
  }

  const StyledTag = styled(Tag)`
    height: 100%;
    width: 100%;
  `;

  return (
    <Wrapper>
      <StyledTag />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 4rem;
  right: -16px;

  width: 200px;
  height: calc(200px * 1.9178);
`;
