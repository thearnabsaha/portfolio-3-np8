import EveryWhereDark from "../Components/EveryWhereDark";
import WorkCard from "../Components/WorkCard";
import { motion } from 'framer-motion'
const Works = () => {
    return (
        <>
            <div id="works">
                <div className="container">
                    <motion.h5 className='big' initial={{x:-1000}} animate={{x:0,transition:{duration:1,delay:.5,type:"spring"}}}>Skills</motion.h5>
                    <EveryWhereDark/>
                    <div className="main">
                        <WorkCard/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Works;