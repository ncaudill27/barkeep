import {
  ChangeEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { Form } from "remix";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResultsOpen(true);
    setSearch(e.target.value);
  };

  const handleClick = (e: MouseEvent) => {
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
    <Form ref={formEl}>
      <SearchInput
        search={search}
        handleChange={handleChange}
        handleClick={handleClick}
      >
        <SearchList isOpen={resultsOpen} drinks={drinks} search={search} />
      </SearchInput>
    </Form>
  );
}
