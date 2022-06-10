import { Github } from "../Data/allsvg";
import { PortfolioData } from "../Data/portfolioData";
const WorkCard = () => {
    return (
        <>
            {
                PortfolioData.map((e)=>{
                    return(
                        <>
                            <div id="workCard">
                                <div className="container">
                                    <h1>{e.name}</h1>
                                    <p>{e.description}</p>
                                    <div className="hashtags">
                                        <h5>#react #gsap #styledComponents</h5>
                                    </div>
                                    <div className="line"></div>
                                    <div className="button">
                                        <a href={e.demo} className="avisit">Visit</a>
                                        <a href={e.github}><Github className="newIcon"/></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>

    );
}

export default WorkCard
{/* <div>
<div id="workCard">
    <div className="container">

    </div>
</div>
</div> */}
// {
//     PortfolioData.map((e)=>{
//         return(
//             <>
//                 <h1>{e.name}</h1>
//                 <p>{e.description}</p>
//                 <div className="hashtags">
//                     <h5>#react #gsap #styledComponents</h5>
//                 </div>
//                 <div className="line"></div>
//                 <div className="button">
//                     <a href={e.demo} className="avisit">Visit</a>
//                     <a href={e.github}><Github className="newIcon"/></a>
//                 </div>
//             </>
//         )
//     })
// }