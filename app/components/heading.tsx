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

const PrimaryHeading = styled.h1`
  font-size: ${40 / 16}rem;
`;

const SecondaryHeading = styled.h2`
  font-size: ${28 / 16}rem;
`;

const TertiaryHeading = styled.h3`
  font-size: ${20 / 16}rem;
  font-weight: 600;
`;

export default Heading;
