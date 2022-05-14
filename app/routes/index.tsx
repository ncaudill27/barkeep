import styled from "styled-components";
import Heading from "~/components/heading";

export default function Index() {
  return (
    <>
      <LandingHeading tag="h1">Barkeep Journal</LandingHeading>
      <p>Every bartender's favorite cheat sheet.</p>
    </>
  );
}

const LandingHeading = styled(Heading)`
  font-weight: var(--font-weight-black);
  margin-bottom: 8px;
`;
