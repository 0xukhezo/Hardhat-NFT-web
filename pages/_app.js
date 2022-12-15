import "../styles/globals.css"
import Navbar from "../components/Navbar"
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <Navbar />
            <Component {...pageProps} />
        </MoralisProvider>
    )
}

export default MyApp
