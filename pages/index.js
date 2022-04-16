import { PowerBtn, YouTube, Github, Facebook,Twitter, YinYang } from '../Data/allsvg';
const index = () => {
  return (
    <>
      <div id="index" >
      <a href=""><PowerBtn className="power" /></a>
      <a href="" className="abt">About.</a>
      <a href="" className="skl">My Skills.</a>
      <a href="" className="say">Say Hi...</a>
      <a href="" className="wrk">Work</a>
      <a href=""><YinYang className="yin" /></a>
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