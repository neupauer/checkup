import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="min-h-screen antialiased text-black bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
