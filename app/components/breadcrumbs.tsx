import styled from "styled-components";
import BaseLink from "./baseLink";

type BreadCrumbsProps = {
  children: JSX.Element[];
};

type CrumbProps = {
  href: string;
  isCurrentPage: boolean;
  children: string;
};

export default function BreadCrumbs({ children }: BreadCrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
}

BreadCrumbs.Crumb = ({ href, isCurrentPage, children }: CrumbProps) => (
  <CrumbWrapper>
    <BaseLink to={href} aria-current={isCurrentPage ? "page" : undefined}>
      {children}
    </BaseLink>
  </CrumbWrapper>
);

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: -70px 0 40px;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 8px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: "";
      display: inline-block;
      transform: rotate(15deg);
      border-right: 1px solid;
      margin-right: var(--spacing);
      height: 0.6em;
    }
  }
`;
