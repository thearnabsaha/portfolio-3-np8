import '../styles/globals.scss'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { PowerBtn, YouTube, Github, Facebook,Twitter, YinYang } from '../Data/allsvg';

function MyApp({ Component, pageProps }) {
  return <>
        <Link href="/"><PowerBtn className="power" /></Link>
        <div className="icon">
          <a href=""><motion.div initial={{scale:0}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1}}><Github className="git ic" /></motion.div></a>
          <a href=""><motion.div initial={{scale:0}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.2}}><Twitter className="twt ic" /></motion.div></a>
          <a href=""><motion.div initial={{scale:0}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.4}}><Facebook className="fb ic" /></motion.div></a>
          <a href=""><motion.div initial={{scale:0}} animate={{scale:[0,1,1.5,1]}} transition={{type:'spring', duration:1, delay:1.6}}><YouTube className="yt ic" /></motion.div></a>
          <motion.div className="line" initial={{height:0}} animate={{height:150}}transition={{type:'spring', duration:1, delay:1.8}}></motion.div>
        </div>
        <Component {...pageProps} />
  </>
}
export default MyApp
