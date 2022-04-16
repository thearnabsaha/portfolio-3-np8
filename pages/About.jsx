import { motion} from 'framer-motion'
import EveryWhere from '../Components/EveryWhere';
import Image from 'next/image';
import SPMAN from '../public/assets/Images/spaceman.png';
const About = () => {
    return (
        <>
            <motion.div id="about" exit={{y:-1000,transition:{duration:.5}}}>
                <EveryWhere/>
                <div className="container">
                    <div className="left">
                        <p>Im a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.</p>
                        <p>Im interested in the whole frontend stack Like trying new things and building great projects. Im an independent freelancer and blogger. I love to write blogs and read books.</p>
                        <p>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</p>
                    </div>
                    <div className="right">
                        {/* <Image src={SPMAN} width="300" height="500"  alt='arnabs image' className="img"/> */}
                        {/* <Image src="/../public/assets/Images/spaceman.png" width="300" height="500" layout='raw' alt='arnabs image' className="img"/> */}
                        {/* <img src={SPMAN} alt="arnab" /> */}
                        {/* <img src={SPMAN} alt="spaceman" /> */}

                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default About;