import MartiniIcon from "./iconMartini";
import FilterIcon from "./iconFilter";
import { CSSProperties } from "react";

type IconProps = {
  icon: "martini" | "filter";
  iconStyles?: CSSProperties;
};

const ICON = {
  martini: {
    tag: MartiniIcon,
    author: "Juraj Sedlák",
    profile: "https://thenounproject.com/yumminky/",
    twitter: "https://twitter.com/yumminky",
    iconLink: "https://thenounproject.com/icon/martini-glass-876587/",
  },
  filter: {
    tag: FilterIcon,
    author: "Danny Amacher",
    profile: "https://thenounproject.com/dannyamacher/",
    twitter: "https://twitter.com/dannyamacher",
    iconLink: "https://thenounproject.com/icon/filter-3629722/",
  },
};

export default function Icon({ icon, iconStyles, ...props }: IconProps) {
  let Tag = ICON[icon].tag;

  return (
    <div
      aria-hidden
      data-iconauthor={ICON[icon].author}
      data-iconauthorprofile={ICON[icon].profile}
      data-iconauthortwitter={ICON[icon].twitter}
      data-iconlocation={ICON[icon].iconLink}
      {...props}
    >
      <Tag style={iconStyles} />
    </div>
  );
}
