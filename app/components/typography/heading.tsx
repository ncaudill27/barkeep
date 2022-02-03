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
    default:
      // TypeScript catches before this :)
      break;
  }

  return <Tag {...props} />;
};
const PrimaryHeading = styled.h1`
  font-size: ${40 / 16}rem;
`;

export default Heading;
