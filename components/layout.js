import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Nav from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Shanel Photography</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Nav />
      <main>
        {children}
      </main>
    </>
  )
}
