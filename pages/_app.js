import '../styles/globals.scss'
import Link from 'next/link';
import { PowerBtn} from '../Data/allsvg';
import { AnimatePresence } from 'framer-motion';
function MyApp({ Component, pageProps,router }) {
  return <>
        <Link href="/"><PowerBtn className="power" /></Link>
        <AnimatePresence exitBeforeEnter >
        <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
  </>
}
export default MyApp
