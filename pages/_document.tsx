import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-Satoshi bg-white dark:bg-zinc-900 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
