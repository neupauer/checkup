import "~/styles/globals.css";

import { StrictMode, Fragment } from "react";
import Head from "next/head";

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

      <StrictMode>
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </StrictMode>
    </>
  );
}

export default App;
