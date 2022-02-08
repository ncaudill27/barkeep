import { ChangeEvent, useState } from "react";
import { Form } from "remix";
import { filterDrinks } from "~/drink";
import type { Drink } from "~/drink";
import SearchInput from "./searchInput";

interface SearchProps {
  drinks: Drink[];
}
export default function Search({ drinks }: SearchProps) {
  const [search, setSearch] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <Form>
      <SearchInput search={search} handleChange={handleChange} />
      {filterDrinks(drinks, { search }).map((d) => (
        <div>{d.name}</div>
      ))}
    </Form>
  );
}
