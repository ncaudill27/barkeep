import { Link } from "remix";
import Header from "~/components/header";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <ul>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
      </ul>
    </div>
  );
}
