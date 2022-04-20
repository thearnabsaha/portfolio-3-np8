import { Github } from "../Data/allsvg";

const WorkCard = () => {
    return (
        <div>
            <div id="workCard">
                <div className="container">
                    <h1>Agency Landing Page</h1>
                    <p>It is build on top of the React JS, with styledComponents and GSAP for smooth scrolling animations.</p>
                    <div id="hashtags">
                        <p>#react #gsap #styledComponents</p>
                    </div>
                    <div className="button">
                        <a>Visit</a>
                        <Github className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;