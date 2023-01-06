import { GetStaticProps } from "next";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
