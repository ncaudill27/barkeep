import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Form } from "@remix-run/react";
import type { Drink } from "~/drink";
import SearchInput from "./searchInput";
import SearchList from "./searchList";

interface SearchProps {
  drinks: Drink[];
}
export default function Search({ drinks }: SearchProps) {
  const [search, setSearch] = useState("");
  const [resultsOpen, setResultsOpen] = useState(false);
  const formEl = useRef<HTMLFormElement>();

  const handleKeyboardClose = (event: KeyboardEvent) => {
    const isEscapeKey = event.key === "Escape";
    const isEnterKey = event.key === "Enter";
    if (resultsOpen && (isEnterKey || isEscapeKey)) {
      setResultsOpen(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResultsOpen(true);
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setResultsOpen(true);
  };

  useEffect(() => {
    // Close results if clicked outside
    function handleClickOutside(event: MouseEvent) {
      if (
        resultsOpen &&
        formEl.current &&
        !formEl.current.contains(event.target)
      ) {
        setResultsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formEl, search]);

  return (
    <StyledForm ref={formEl}>
      <SearchInput
        search={search}
        handleChange={handleChange}
        handleClick={handleClick}
        handleKeyPress={handleKeyboardClose}
      >
        <SearchList isOpen={resultsOpen} drinks={drinks} search={search} />
      </SearchInput>
    </StyledForm>
  );
}

const StyledForm = styled(Form)`
  width: min(100%, 35ch);
`;
