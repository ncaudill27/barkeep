import styled from "styled-components";

import DesktopBlob from "~/components/backgroundDesktopBlob";
import TabletBlob from "~/components/backgroundTabletBlob";
import MobileBlob from "~/components/backgroundMobileBlob";
import Heading from "~/components/heading";
import Banner from "~/components/banner";

export default function Index() {
  return (
    <>
      <LandingHeading tag="h1">
        Every bartender's favorite cheat sheet.
      </LandingHeading>
      <SubHeading>Learn. Build. Enjoy.</SubHeading>
      <Banner>
        <BannerItem>
          <BannerHeading tag="h2">Learn</BannerHeading>
          <p>how to bartend!</p>
        </BannerItem>
        <BannerItem>
          <BannerHeading tag="h2">Build</BannerHeading>
          <p>like a pro!</p>
        </BannerItem>
        <BannerItem>
          <BannerHeading tag="h2">Enjoy</BannerHeading>
          <p>with great company!</p>
        </BannerItem>
      </Banner>
      <DesktopBackground aria-hidden />
      <MobileBackground aria-hidden />
      <SmallMobileBackground aria-hidden />
    </>
  );
}

const LandingHeading = styled(Heading)`
  font-weight: var(--font-weight-black);
  max-width: 385px;
  margin-bottom: 8px;
`;

const SubHeading = styled.p`
  margin-bottom: 100px;
`;

const BannerHeading = styled(Heading)`
  color: inherit;
`;

const BannerItem = styled.div`
  flex-basis: 100%;

  @media screen and (min-width: 600px) {
    flex-basis: calc(33% - var(--spacing-3));
  }
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
