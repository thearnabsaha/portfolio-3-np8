import '../styles/globals.scss'
import Link from 'next/link';
import { PowerBtn, YouTube, Github, Facebook,Twitter, YinYang } from '../Data/allsvg';

function MyApp({ Component, pageProps }) {
  return <>
        <Link href="/"><PowerBtn className="power" /></Link>
        <Component {...pageProps} />
  </>
}

export default MyApp
