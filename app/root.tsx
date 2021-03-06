import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

import Layout from "~/components/layout";
import GlobalStyles from "~/styles/globalStyles";
import Header from "~/components/header";

export const meta: MetaFunction = () => {
  return {
    title: "A Barkeep Journal",
    description: "Every bartender's favorite cheat sheet.",
  };
};

export default function App() {
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
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </Layout>
    </html>
  );
}
