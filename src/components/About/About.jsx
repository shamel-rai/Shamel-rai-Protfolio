import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profileImg from '../../assets/Shamel.png';

export default function About() {
    return (
        <div className='about' id='About-Me'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profileImg} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-content">
                        <p>Hello! I'm Shamel Rai, a passionate and dedicated beginner in the world of programming,
                            with a strong focus on frontend development.
                            Despite being new to this field, my enthusiasm and commitment drive me to continuously learn and improve my skills. I'm currently seeking internship opportunities to gain hands-on experience
                            and contribute to real-world projects.</p>
                    </div>
                    <div className="skills">
                        <div className="skill-info"> <p>HTML & CSS</p><hr style={{ width: "60%" }} /></div>
                        <div className="skill-info"> <p>ReactJs</p><hr style={{ width: "40%" }} /></div>
                        <div className="skill-info"> <p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                        <div className="skill-info"> <p>Java</p><hr style={{ width: "50%" }} /></div>
                        <div className="skill-info"> <p>Kotlin</p><hr style={{ width: "40%" }} /></div>
                        <div className="skill-info"> <p>Python</p><hr style={{ width: "60%" }} /></div>
                        <div className="skill-info"> <p>SQL</p><hr style={{ width: "40%" }} /></div>
                        <div className="skill-info"> <p>Linux</p><hr style={{ width: "60%" }} /></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>0+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>6</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>7</h1>
                    <p>CERTIFICATIONS</p>
                </div>
            </div>
        </div >
    );
}
