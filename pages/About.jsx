import { motion} from 'framer-motion'
import EveryWhere from '../Components/EveryWhere';
import SPMAN from '../public/assets/Images/spaceman.png';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme= {
    dark: {
      textColor:"#000",
    },
    light: {
      textColor:"#fff",
    },
  };
  const FullDiv = styled.div`
  background-color: ${(props)=>props.theme.dark.textColor};
`;
const About = () => {
    return (
        <FullDiv>
            <ThemeProvider theme={theme}>
                <motion.div id="about" exit={{y:-1000,transition:{duration:.5}}}>
                    <motion.h5 className='big' initial={{x:-1000}} animate={{x:0,transition:{duration:1,delay:.5,type:"spring"}}}>About</motion.h5>
                    <EveryWhere/>
                    <div className="container">
                        <div className="left">
                            <p>Im a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.</p>
                            <p>Im interested in the whole frontend stack Like trying new things and building great projects. Im an independent freelancer and blogger. I love to write blogs and read books.</p>
                            <p>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</p>
                        </div>
                        <motion.div className="right">
                            <motion.img src={SPMAN.src} alt=""  initial={{y:1000,x:1000}} animate={{y:-100,x:-30,transition:{duration:.8}}}/>
                        </motion.div>
                    </div>
                </motion.div>
            </ThemeProvider>
        </FullDiv>
    );
}

export default About;


