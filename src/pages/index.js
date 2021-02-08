import Head from "next/head";
import Layout from './components/Layouts';
import Hero from './components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-4">
        <Hero />
        <Link href="/page-two"><a>Go to Page Two</a></Link>
      </main>
    </Layout>
  );
}
