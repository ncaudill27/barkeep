import React, { KeyboardEventHandler, MouseEventHandler } from "react";
import styled from "styled-components";
import { ChangeEventHandler } from "react";

type SearchInputProps = {
  search: string;
  handleChange: ChangeEventHandler;
  handleClick: MouseEventHandler;
  handleKeyPress: KeyboardEventHandler;
  children: React.ReactNode;
};

export default function SearchInput({
  search,
  children,
  handleChange,
  handleClick,
  handleKeyPress,
}: SearchInputProps) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <TextInput
        type="search"
        name="search"
        placeholder="Search drink"
        autoComplete="off"
        value={search}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyPress}
      />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: inherit;
`;

export const TextInput = styled.input`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 40px;
  padding-left: 42px;
  height: 44px;

  border: 1px solid var(--color-brown);
  border-radius: 0px;
  background-color: var(--color-cream);
  color: var(--color-brown);

  &:focus {
    box-shadow: 0 0 0 1px var(--color-brown);
    background-color: var(--color-cream-light);
  }

  &::placeholder {
    font-weight: 400;
    color: var(--color-brown-light-transparent);
  }

  /* remove WebKit icons */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 8px;
  height: 44px;
`;

function Icon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
        fill="var(--color-brown-light-transparent)"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
