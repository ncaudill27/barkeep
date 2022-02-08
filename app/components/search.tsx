import { ChangeEvent, useState } from "react";
import { Form } from "remix";
import type { Drink } from "~/drink";
import SearchInput from "./searchInput";
import SearchList from "./searchList";

interface SearchProps {
  drinks: Drink[];
}
export default function Search({ drinks }: SearchProps) {
  const [search, setSearch] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <Form>
      <SearchInput search={search} handleChange={handleChange}>
        <SearchList drinks={drinks} search={search} />
      </SearchInput>
    </Form>
  );
}
