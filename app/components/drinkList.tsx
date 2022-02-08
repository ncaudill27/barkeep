import { Link } from "remix";
import styled from "styled-components";
import type { Drink } from "~/drink";

type DrinkListProps = {
  drinks: Drink[];
};

export default function DrinkList({ drinks }: DrinkListProps) {
  return (
    <StyledList>
      {drinks.map((drink) => (
        <StyledItem key={drink.name}>
          <StyledLink to={`/drinks/${drink.name}`}>{drink.name}</StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 0;
  padding-bottom: 40px;
  list-style: none;
`;

const StyledItem = styled.li`
  margin-bottom: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
