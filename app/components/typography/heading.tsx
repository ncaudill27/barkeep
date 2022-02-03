import styled from "styled-components";

interface HeadingProps {
  tag: string;
  children: string;
}

const Heading = ({ tag, ...props }: HeadingProps) => {
  let Tag: any;

  switch (tag) {
    case "h1":
      Tag = PrimaryHeading;
      break;
    case "h2":
      Tag = SecondaryHeading;
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

export default Heading;
