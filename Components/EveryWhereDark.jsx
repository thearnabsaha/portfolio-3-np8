import Link from 'next/link';
import { motion } from 'framer-motion'
import { PowerBtn, YouTube, Github, Facebook,Twitter, YinYang } from '../Data/allsvg';
const EveryWhereDark = () => {
    return (
        <div>
            <Link href="/About" passHref><motion.p className="tas" initial={{y:-100,x:10}} animate={{y:0,color:"#FCF6F4",x:10,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> TAS</motion.p></Link>
            <div className="icon">
                <a href=""><motion.div initial={{scale:0}} animate={{scale:[0,1,1.5,1],fill:"#FCF6F4"}} transition={{type:'spring', duration:1, delay:1}}><Github className="git ic" /></motion.div></a>
                <a href=""><motion.div initial={{scale:0}} animate={{scale:[0,1,1.5,1],fill:"#FCF6F4"}} transition={{type:'spring', duration:1, delay:1.2}}><Twitter className="twt ic" /></motion.div></a>
                <a href=""><motion.div initial={{scale:0}} animate={{scale:[0,1,1.5,1],fill:"#FCF6F4"}} transition={{type:'spring', duration:1, delay:1.4}}><Facebook className="fb ic" /></motion.div></a>
                <a href=""><motion.div initial={{scale:0}} animate={{scale:[0,1,1.5,1],fill:"#FCF6F4"}} transition={{type:'spring', duration:1, delay:1.6}}><YouTube className="yt ic" /></motion.div></a>
                <motion.div className="line" initial={{height:0}} animate={{height:150,backgroundColor:"#FCF6F4"}} transition={{type:'spring', duration:1, delay:1.8}}></motion.div>
            </div>
        </div>
    );
}

export default EveryWhereDark;