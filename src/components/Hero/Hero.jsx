import './hero.css';
import profile_img from '../../assets/Shamel.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
export default function Hero() {
    return (
        <div className='hero' id='Home'>
            <img src={profile_img} alt="" />
            <h1>I'm Shamel Rai</h1>
            <h2>Aspiring frontend developer</h2>
            <p> Aspiring frontend developer and current BSc (Hons) Computing student at Islington College, affiliated with London Metropolitan University.
                Skilled in HTML, CSS, JavaScript, and React, with hands-on experience through various web development projects. Seeking a frontend development
                internship to apply my skills and contribute to innovative digital solutions.
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchorLink' offset={50} href='#Contact-Me'>Connect With Me </AnchorLink>
                </div>
                <a href="/CV.pdf" download={true} className='CV'>
                    <div className="hero-resume" >
                        My Resume
                    </div>
                </a>
            </div>
        </div>
    )
}