import { PowerBtn, YouTube, Github, Facebook,Twitter, YinYang } from '../Data/allsvg';
import Link from 'next/link';
const index = () => {
  return (
    <>
      <div id="index" >
        <Link href="/Components/About" ><p className="abt" > About.</p></Link>
        <Link href="/Components/About" ><p className="skl" > My Skills.</p></Link>
        <Link href="/Components/About" ><p className="say" > Say Hi...</p></Link>
        <Link href="/Components/About" ><p className="wrk" > Work</p></Link>
        <Link href="/Components/About" ><p className="tas" > TAS</p></Link>
        <h6>click here!</h6>
        <YinYang className="yin" />
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