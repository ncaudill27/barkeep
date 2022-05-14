import styled from "styled-components";
import DesktopBlob from "~/components/backgroundDesktopBlob";
import TabletBlob from "~/components/backgroundTabletBlob";
import MobileBlob from "~/components/backgroundMobileBlob";
import Heading from "~/components/heading";
import Flex from "~/components/flex";

export default function Index() {
  return (
    <>
      <LandingHeading tag="h1">
        Every bartender's favorite cheat sheet.
      </LandingHeading>
      <SubHeading>Learn. Build. Enjoy.</SubHeading>
      <Banner>
        <Flex justify="space-between" gap={3} wrap>
          <Flex.FlexChild flex="1">
            <BannerHeading tag="h2">Learn</BannerHeading>
            <p>how to bartend!</p>
          </Flex.FlexChild>
          <Flex.FlexChild flex="1">
            <BannerHeading tag="h2">Build</BannerHeading>
            <p>like a pro!</p>
          </Flex.FlexChild>
          <Flex.FlexChild flex="1">
            <BannerHeading tag="h2">Enjoy</BannerHeading>
            <p>with great company!</p>
          </Flex.FlexChild>
        </Flex>
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

const Banner = styled.div`
  position: absolute;
  padding-top: 32px;
  padding-bottom: 32px;
  left: 0;
  width: 100%;
  background-color: var(--color-brown);
  color: var(--color-cream);
  padding-inline: max(16px, 50% - 1000px / 2);
`;

const BannerHeading = styled(Heading)`
  color: inherit;
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
