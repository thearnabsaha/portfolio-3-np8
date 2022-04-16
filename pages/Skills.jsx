import {Design,Develope } from '../Data/allsvg';

const Skills = () => {
    return (
        <>
            <div id="skills">
                <div className="container">
                    <div className="card">
                        <h5 className='big'>Skills</h5>
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
                    </div>
                    <div className="card">
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;