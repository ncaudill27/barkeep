import styled from "styled-components";
import MartiniIcon from "./iconMartini";

type IconProps = {
  icon: "martini";
};

const ICON = {
  martini: {
    author: "Juraj Sedlák",
    profile: "https://thenounproject.com/yumminky/",
    twitter: "https://twitter.com/yumminky",
    iconLink: "https://thenounproject.com/icon/martini-glass-876587/",
    aspectRatio: 1.9178,
    width: "200px",
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

  return (
    <Wrapper
      data-iconauthor={ICON[icon].author}
      data-iconauthorprofile={ICON[icon].profile}
      data-iconauthortwitter={ICON[icon].twitter}
      data-iconlocation={ICON[icon].iconLink}
      style={{
        "--aspect-ratio": ICON[icon].aspectRatio,
        "--width": ICON[icon].width,
      }}
    >
      <Tag />
    </Wrapper>
  );
}

type IconWrapperProps = {
  style: {
    "--aspect-ratio": number;
    "--width": string;
  };
};

const Wrapper = styled.div<IconWrapperProps>`
  position: fixed;
  top: 4rem;
  right: -16px;

  width: var(--width);
  height: calc(var(--width) * var(--aspect-ratio));
`;
