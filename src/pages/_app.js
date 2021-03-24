import "~/styles/globals.css";

import Head from "next/head";
import { Fragment } from "react";

import { DbProvider } from "~/components/db-context";

function App({ Component, pageProps }) {
  const { shell: Shell = Fragment } = Component;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <DbProvider>
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </DbProvider>
    </>
  );
}

export default App;
