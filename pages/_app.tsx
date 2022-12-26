import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Head>
        <title>Koret Media</title>
        <link rel="shortcut icon" href="/blackK.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
