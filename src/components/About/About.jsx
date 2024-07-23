import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profileImg from '../../assets/profile_img.svg';

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
                        <div className="skill-info"><p> <p>HTML & CSS</p><hr style={{ width: "50%" }} /></p></div>
                        <div className="skill-info"><p> <p>ReactJs</p><hr style={{ width: "50%" }} /></p></div>
                        <div className="skill-info"><p> <p>JavaScript</p><hr style={{ width: "50%" }} /></p></div>
                        <div className="skill-info"><p> <p>Java</p><hr style={{ width: "40%" }} /></p></div>

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
                    <h1>4</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10</h1>
                    <p>CERTIFICATIONS</p>
                </div>
            </div>
        </div >
    );
}
