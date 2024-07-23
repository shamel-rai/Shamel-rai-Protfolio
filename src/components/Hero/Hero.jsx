import './hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
export default function Hero() {
    return (
        <div className='hero' id='Home'>
            <img src={profile_img} alt="" />
            <h1>I'm Shamel Rai</h1>
            <h2>Aspiring frontend developer</h2>
            <p> with a strong foundation in computing and practical experience through web
                development projects. Currently pursuing a BSc (Hons) in Computing at Islington College, affiliated with
                London Metropolitan University. Eager to leverage skills in HTML, CSS, JavaScript, and React to
                contribute to innovative web solutions and gain valuable industry experience through an internship.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchorLink' offset={50} href='#Contact-Me'>Connect With Me </AnchorLink>
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}