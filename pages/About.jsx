import { motion} from 'framer-motion'
import EveryWhere from '../Components/EveryWhere';

const About = () => {
    return (
        <>
            <motion.div id="about" exit={{y:-1000,transition:{duration:.5}}}>
                <EveryWhere/>
                <div className="container">
                    <div className="left">
                        <p>I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.</p>
                        <p>I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.</p>
                        <p>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</p>
                    </div>
                    <div className="right">
                        
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default About;