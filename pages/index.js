import Head from 'next/head'
import { Example, Layout } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Hopkins</title>
        <meta name="description" content="Alex Hopkins Portfolio 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Example />
        </Layout>
      </main>
    </div>
  );
};
