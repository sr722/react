import "./Education.css";
export function Education()
{
    return(
        <section className="education" id="education">
            <div className="container">
                <div className="n2">
                <h1 className="title-text">My Education</h1>
                <div className="skill-box">
                    <span className="title">High School</span>
                    <p class="para">St.Arnold's High School, Medarametla</p>
                    <div className="skill-bar">
                        <span className="skill-per school">
                            <span className="tooltip">100%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Intermediate</span>
                    <p class="para">Sri Chaitanya Junior College, Guntur</p>
                    <div className="skill-bar">
                        <span className="skill-per college">
                            <span className="tooltip">94%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Present BTech</span>
                    <p class="para">VIT-AP University, Amaravati</p>
                    <div className="skill-bar">
                        <span className="skill-per btech">
                            <span className="tooltip">86%</span>
                        </span>
                    </div>
                </div>
                </div>

                <div className="n1">
                <h1 className="title-text">Technical Skills</h1>
                <div className="skill-box">
                    <span className="title">HTML</span>
                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">90%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">CSS</span>
                    <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">85%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">JavaScript</span>
                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">ReactJS</span>
                    <div className="skill-bar">
                        <span className="skill-per react">
                            <span className="tooltip">70%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Python</span>
                    <div className="skill-bar">
                        <span className="skill-per python">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Java</span>
                    <div className="skill-bar">
                        <span className="skill-per java">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </section> 
    )
}

