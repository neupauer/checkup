import { useMemo } from "react";
import Head from "next/head";

const baseTitle = process.env.NEXT_PUBLIC_TITLE;

function Screen({ title, rawTitle, children }) {
  const memoizedTitle = useMemo(() => rawTitle || (title ? `${title} – ${baseTitle}` : baseTitle), [title, rawTitle]);

  return (
    <>
      <Head>
        <title>{memoizedTitle}</title>
      </Head>
      {children}
    </>
  );
}

export default Screen;
