import React, { useState, useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/")
  const router = useRouter()

  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])

  return (
    <nav className="py-5 px-8 flex flex-row justify-between items-center border-b-4 border-green-500 mb-4 font-medium text-xl">
      <Link
        href="/"
        className={
          activeLink !== "/"
            ? "hover:text-green-400 hover:border-b-2 border-green-300"
            : "text-green-400"
        }
      >
        NFT Marketplace
      </Link>
      <Link
        href="/sell"
        className={
          activeLink !== "/sell"
            ? "hover:text-green-400 hover:border-b-2 border-green-300"
            : "text-green-400"
        }
      >
        Sell
      </Link>
      <div className="flex justify-end items-center">
        <Link
          href="/profile"
          className={
            activeLink !== "/profile"
              ? "hover:text-green-400 hover:border-b-2 border-green-300"
              : "text-green-400"
          }
        >
          Profile
        </Link>
      </div>
      <ConnectButton />
    </nav>
  )
}
