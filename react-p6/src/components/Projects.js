import "./Projects.css";
export function Projects()
{
    return(
        <section className="portfolio" id="portfolio">
            <h1 className="p1">My Projects</h1>
            <div class="cont1">
            <div className="p2">
                <h1 class="p9">*</h1>
                <h3 className="p3">SeatBelt Detection</h3>
                <p className="p8">This was the first project which i have
                 done<br/>by using the Image Processing in Python.</p>
            </div>
            <div className="p4">
                <h1 class="p9">*</h1>
                <h3 className="p5">Fraud Detection in Insurance</h3>
                <p className="p10">This was the second project which i have<br/>done
                 by using Machine Learning Algorithms.</p>
            </div>
            <div className="p6">
                <h1 class="p9">*</h1>
                <h3 className="p7">LPG Gas Leakage Detection</h3>
                <p className="p11">This was the third project which I have done by using <br/>
                Arduino board,sensor.</p>
            </div>
            </div>
            <a href="#" className="btn">Details</a>
        </section>
    )
}
