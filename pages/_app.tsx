import React from "react"
import { getDefaultWallets, RainbowKitProvider, midnightTheme } from "@rainbow-me/rainbowkit"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { mainnet, goerli } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

import "@/styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import Head from "next/head"
import type { AppProps } from "next/app"

import Navbar from "../components/Navbar"

const { chains, provider } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "NFT Marketplace",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Biokoin DAO</title>
        <meta name="description" content="Biokoin DAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} modalSize="compact" theme={midnightTheme()}>
          <Navbar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}
