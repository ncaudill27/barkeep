import styled from "styled-components";
import DesktopBlob from "~/components/backgroundDesktopBlob";
import TabletBlob from "~/components/backgroundTabletBlob";
import MobileBlob from "~/components/backgroundMobileBlob";
import Heading from "~/components/heading";

export default function Index() {
  return (
    <>
      <LandingHeading tag="h1">
        Every bartender's favorite cheat sheet.
      </LandingHeading>
      <DesktopBackground aria-hidden />
      <MobileBackground aria-hidden />
      <SmallMobileBackground aria-hidden />
    </>
  );
}

const LandingHeading = styled(Heading)`
  font-weight: var(--font-weight-black);
  margin-bottom: 8px;
`;

const DesktopBackground = styled(DesktopBlob)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: -1;

  @media screen and (min-width: 1300px) {
    display: revert;
  }
`;
const MobileBackground = styled(TabletBlob)`
  display: none;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (min-width: 500px) {
    display: revert;
  }

  @media screen and (min-width: 1300px) {
    display: none;
  }
`;
const SmallMobileBackground = styled(MobileBlob)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (min-width: 500px) {
    display: none;
  }
`;
