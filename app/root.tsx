import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams,
} from "remix";
import type { MetaFunction } from "remix";
import { Content, Root } from "./components/radixTabs";

import Layout from "./components/layout";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/header";
import Nav from "./components/nav";

export const meta: MetaFunction = () => {
  return {
    title: "A Barkeep Journal",
    description: "Every bartender's favorite cheat sheet.",
  };
};

export default function App() {
  const { category = "" } = useParams();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <Layout>
        <GlobalStyles />
        <Header />
        <Root value={category} activationMode="manual" defaultValue="">
          <Nav />
          <Content value={category}>
            <Outlet />
          </Content>
        </Root>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </Layout>
    </html>
  );
}
