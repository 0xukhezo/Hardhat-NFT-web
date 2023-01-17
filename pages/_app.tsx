import React from "react"

import "@/styles/globals.css"
import Head from "next/head"
import type { AppProps } from "next/app"

import Navbar from "../components/Navbar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Biokoin DAO</title>
        <meta name="description" content="Biokoin DAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
