import React from "react"
import { ConnectButton } from "web3uikit"
import Link from "next/link"

function Navbar() {
    return (
        <nav>
            <Link href="/">NFT Marketplace</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/profile">Profile</Link>
            <ConnectButton />
        </nav>
    )
}

export default Navbar
