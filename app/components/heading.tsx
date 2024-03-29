import styled from "styled-components";

type HeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4";
  children: string | React.ReactNode;
};

const Heading = ({ tag, ...props }: HeadingProps) => {
  let Tag: any;

  switch (tag) {
    case "h1":
      Tag = PrimaryHeading;
      break;
    case "h2":
      Tag = SecondaryHeading;
      break;
    case "h3":
      Tag = TertiaryHeading;
      break;
    case "h4":
      Tag = QuaternaryHeading;
      break;
    default:
      throw new Error('Prop Error: Missing or invalid "tag" prop');
  }

  return <Tag as={tag} {...props} />;
};

const HeadingBase = styled.h1`
  color: var(--color-brown-darkest);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-semi-bold);
  line-height: 1.1;
`;

const PrimaryHeading = styled(HeadingBase)`
  font-size: ${52 / 16}rem;
`;

const SecondaryHeading = styled(HeadingBase)`
  font-size: ${40 / 16}rem;
`;

const TertiaryHeading = styled(HeadingBase)`
  font-size: ${24 / 16}rem;
  font-weight: var(--font-weight-bold);
`;

const QuaternaryHeading = styled.h4`
  margin-bottom: 8px;
`;

export const ThickHeading = styled(Heading)`
  font-weight: var(--font-weight-black);
  max-width: 385px;
  margin-bottom: 8px;
`;

export default Heading;
