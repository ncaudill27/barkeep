import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import Layout from "./components/layout";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/header";
import Nav from "./components/nav";

export const meta: MetaFunction = () => {
  return { title: "Barkeep" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <Layout>
        <GlobalStyles />
        <Header />
        <Nav />

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </Layout>
    </html>
  );
}
