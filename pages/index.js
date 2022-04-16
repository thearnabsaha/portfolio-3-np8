import {YinYang } from '../Data/allsvg';
import Link from 'next/link';
import { motion} from 'framer-motion'
import { useState } from 'react';
import EveryWhere from '../Components/EveryWhere';
const index = () => {
  const [click, setClick] = useState(false)
  return (
    <>
        <motion.div id="index" exit={{y:1000,transition:{duration:.5}}}>
          <EveryWhere/>
          <Link href="/About"><motion.p className="abt" initial={{y:100}} animate={{y:-30,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> About.</motion.p></Link>
          <Link href="/Skills" ><motion.p className="skl" initial={{y:100}} animate={{y:-30,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> My Skills.</motion.p></Link>
          <Link href={{pathname:"mailto:thearnabsaha201@gmail.com"}} target="_blank"><motion.p className="say" initial={{y:-100,x:-15}} animate={{y:30,x:-40,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> Say Hi...</motion.p></Link>
          <Link href="/About" ><motion.p className="wrk" initial={{x:100,rotate:(90)}} animate={{x:-40,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> Work</motion.p></Link>

          <h6>click here!</h6>
          <a onClick={()=>{setClick(!click)}}><YinYang className="yin"/></a>
        </motion.div>
    </>
  );
}

export default index;