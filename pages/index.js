import { PowerBtn, YouTube, Github, Facebook,Twitter, YinYang } from '../Data/allsvg';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { useState } from 'react';
import styled from 'styled-components';
const yinyan = styled.div`
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
`;
const index = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <div id="index" >
        <Link href="/Components/About" ><motion.p className="abt" initial={{y:100}} animate={{y:-30,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> About.</motion.p></Link>
        <Link href="/Components/About" ><motion.p className="skl" initial={{y:100}} animate={{y:-30,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> My Skills.</motion.p></Link>
        <Link href="/Components/About" ><motion.p className="say" initial={{y:-100,x:-15}} animate={{y:30,x:-40,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> Say Hi...</motion.p></Link>
        <Link href="/Components/About" ><motion.p className="wrk" initial={{x:100,rotate:(90)}} animate={{x:-40,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> Work</motion.p></Link>
        <Link href="/Components/About" ><motion.p className="tas" initial={{y:-100,x:10}} animate={{y:0,x:10,transition: { type:'spring', duration: 1.5, delay:1}}} whileHover={{scale:1.1}} whileTap={{scale:.9}}> TAS</motion.p></Link>
        <h6>click here!</h6>
        <a onClick={()=>{setClick(!click)}}><YinYang className="yin"/></a>
        <div className="icon">
          <a href=""><Github className="git ic" /></a>
          <a href=""><Twitter className="twt ic" /></a>
          <a href=""><Facebook className="fb ic" /></a>
          <a href=""><YouTube className="yt ic" /></a>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
}

export default index;