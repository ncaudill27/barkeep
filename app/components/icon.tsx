import styled from "styled-components";
import MartiniIcon from "./iconMartini";

type IconProps = {
  icon: "martini";
};

const ATTRIBUTION = {
  martini: {
    author: "Juraj Sedlák",
    profile: "https://thenounproject.com/yumminky/",
    twitter: "https://twitter.com/yumminky",
    iconLink: "https://thenounproject.com/icon/martini-glass-876587/",
  },
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
    <Wrapper
      data-iconauthor={ATTRIBUTION[icon].author}
      data-iconauthorprofile={ATTRIBUTION[icon].profile}
      data-iconauthortwitter={ATTRIBUTION[icon].twitter}
      data-iconlocation={ATTRIBUTION[icon].iconLink}
    >
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
