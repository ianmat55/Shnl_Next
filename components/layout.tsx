import Head from 'next/head'
import React from 'react'
import Nav from './navbar'

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Shanel Photography</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Shanel Photography"
          content="Proffessional photography portfolio"
        />
      </Head>
      <Nav />
      <main id='main'>
        {children}
      </main>
    </>
  )
}
