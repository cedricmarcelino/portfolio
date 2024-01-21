import { Typography } from "@mui/material";
import Head from "next/head";
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
        <Typography>I am home page.</Typography>
      </main>
    </>
  );
}
