import React from "react"

import { ConnectButton } from "@rainbow-me/rainbowkit"

export const ConnectCustomButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        accountModalOpen,
        openChainModal,
        openAccountModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted
        const connected = ready && account && chain
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="bg-green-400 p-2 rounded-lg"
                  >
                    Connect Wallet
                  </button>
                )
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="bg-red-400 p-2 rounded-lg"
                  >
                    Wrong network
                  </button>
                )
              }
              return (
                <div>
                  <button
                    type="button"
                    onClick={openAccountModal}
                    className="bg-green-400 p-2 rounded-lg"
                  >
                    {account.ensName ? account.ensName : account.displayName}
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
