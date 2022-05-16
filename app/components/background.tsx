import PinkDesktop from "~/components/backgrounds/pinkDesktopBlob";
import PinkTablet from "~/components/backgrounds/pinkTabletBlob";
import PinkMobile from "~/components/backgrounds/pinkMobileBlob";

import GreenDesktop from "~/components/backgrounds/greenDesktopBlob";
import GreenTablet from "./backgrounds/greenTabletBlob";
import GreenMobile from "./backgrounds/greenMobileBlob";

type BackgroundProps = {
  color: "pink" | "green";
};

const BACKGROUNDS = {
  pink: {
    mobile: PinkMobile,
    tablet: PinkDesktop,
    desktop: PinkTablet,
  },
  green: {
    mobile: GreenMobile,
    tablet: GreenTablet,
    desktop: GreenDesktop,
  },
};

export default function Background({ color }: BackgroundProps) {
  const Mobile = BACKGROUNDS[color].mobile;
  const Tablet = BACKGROUNDS[color].tablet;
  const Desktop = BACKGROUNDS[color].desktop;

  return (
    <>
      <Mobile aria-hidden />
      <Tablet aria-hidden />
      <Desktop aria-hidden />
    </>
  );
}
