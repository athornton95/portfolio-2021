import Head from 'next/head'
import { About, Contact, Experience, Layout, Work } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Hopkins</title>
        <meta name="description" content="Alex Hopkins Portfolio 2021" />
        <link rel="icon" href="/ah-logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Layout />
      </main>
    </div>
  );
};
