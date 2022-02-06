import styled from "styled-components";

type HeadingProps = {
  tag: string;
  children: string;
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
    default:
      throw new Error('Prop Error: Missing or invalid "tag" prop');
  }

  return <Tag {...props} />;
};

const HeadingBase = styled.h1`
  color: var(--color-brown-darkest);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-light);
  line-height: 1.1;
`;

const PrimaryHeading = styled(HeadingBase)`
  font-size: ${48 / 16}rem;
`;

const SecondaryHeading = styled(HeadingBase)`
  font-size: ${28 / 16}rem;
`;

const TertiaryHeading = styled(HeadingBase)`
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-regular);
`;

export default Heading;
