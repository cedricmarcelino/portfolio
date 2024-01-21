import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio | Cedric Jastine Marcelino</title>
        <meta name="description" content="A Web Development Portfolio by Cedric Jastine Marcelino" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>I am home page.</div>
      </main>
    </>
  );
}
