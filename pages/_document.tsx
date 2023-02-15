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
        {/* <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="hidden h-full w-full max-w-7xl grid-cols-3 gap-3.5 px-4 lg:grid">
            <div className="border-x border-white/5"></div>
            <div className="border-x border-white/5"></div>
            <div className="border-x border-white/5"></div>
          </div>
        </div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
