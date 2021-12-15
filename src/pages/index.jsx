import Head from 'next/head'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Somasys</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout />
    </div>
  )
}
