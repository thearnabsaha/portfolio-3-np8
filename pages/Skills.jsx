import {Design,Develope } from '../Data/allsvg';
import { motion } from 'framer-motion'
import EveryWhere from '../Components/EveryWhere';

const Skills = () => {
    return (
        <>
            <motion.div id="skills" exit={{y:1000,transition:{duration:.5}}}>
                <EveryWhere/>
                <div className="container">
                    <motion.h5 className='big' initial={{x:-1000}} animate={{x:0,transition:{duration:1,delay:.5,type:"spring"}}}>Skills</motion.h5>
                    <motion.div className="card" initial={{y:-1000}} animate={{y:0,transition:{duration:1,delay:.5,type:"spring"}}}>
                        <h1><Design className='webd'/>Web Developer</h1>
                        <p>I love to create Website which speaks, Keep it clean, minimal and simple.</p>
                        <h2>Skills:</h2>
                        <ul>
                            <li>Frontend</li>
                            <li>Backend</li>
                        </ul>
                        <h2>Tools</h2>
                        <ul>
                            <li>Html,Css,javascript,SASS,Tailwind</li>
                            <li>React,next.js,MongoDb,Node.js,Redux</li>
                        </ul>
                    </motion.div>
                    <motion.div className="card" initial={{y:-1000}} animate={{y:0,transition:{duration:1,delay:.5,type:"spring"}}}>
                        <h1><Develope className='webd'/>Blockchain Developer</h1>
                        <p>I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.</p>
                        <h2>Skills:</h2>
                        <ul>
                            <li>Smart Contracts Developer</li>
                            <li>Dapps Developer</li>
                        </ul>
                        <h2>Tools</h2>
                        <ul>
                            <li>Solidity,Truffle,Ganche,Web3.js</li>
                            <li>HardHat,Metamask,Ethers.js</li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}

export default Skills;