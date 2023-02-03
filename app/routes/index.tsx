import styled from "styled-components";

import Heading, { ThickHeading as LandingHeading } from "~/components/heading";
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
      <SubBanner>
        <LandingHeading tag="h2">What is this?</LandingHeading>
        <p>Barkeep is a platform for anyone interested in bartending.</p>
        <p>
          Whether you've never picked up a shaker or have been behind the stick
          for years. Check back soon to as we add more features.
        </p>
        <p>Features you can expect:</p>
        <ul>
          <li>Easily share cocktail links with friends</li>
          <li>
            Save your favorite cocktails and add notes for your personal tweaks
          </li>
          <li>
            Easily batch for your next event with the Batch
            Calculator&#8482;&#42;
          </li>
          <li>
            Training content (e.g. How to shake, stir, and profile drinks)
          </li>
        </ul>
      </SubBanner>
      {/* <Background color="pink" /> */}
    </>
  );
}

const SubHeading = styled.p`
  margin-bottom: 100px;
`;

const BannerHeading = styled(Heading)`
  color: var(--color-cream-light);
`;

const BannerItem = styled.div`
  flex-basis: 100%;

  @media screen and (min-width: 600px) {
    flex-basis: calc(33% - var(--spacing-3));
  }
`;

const SubBanner = styled.div`
  max-width: 60ch;
  margin-top: 550px;
  padding-bottom: 60px;

  @media screen and (min-width: 600px) {
    margin-top: 346px;
  }
`;
