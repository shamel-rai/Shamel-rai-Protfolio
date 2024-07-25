import './navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'
import { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar() {
    const [open, setOpen] = useState("Home");
    const openRef = useRef();


    const openMenu = () => {
        openRef.current.style.right = "0";
    }
    const closeMenu = () => {
        openRef.current.style.right = "-350px";
    }
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <img src={menuOpen} onClick={openMenu} alt="" className="navMobOpen" />
            <ul ref={openRef} className="navmenu">
                <img src={menuClose} onClick={closeMenu} alt="" className="navMobClose" />
                <li>
                    <AnchorLink className="anchorLink" href='#Home'>
                        <p onClick={() => setOpen("Home")}>Home</p>
                    </AnchorLink>
                    {open === "Home" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchorLink" offset={50} href='#About-Me'>
                        <p onClick={() => setOpen("About me")}>About me</p>
                    </AnchorLink>
                    {open === "About me" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchorLink" offset={50} href='#Projects'>
                        <p onClick={() => setOpen("Projects")}>Projects</p>
                    </AnchorLink>
                    {open === "Projects" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchorLink" offset={50} href='#Certifications'>
                        <p onClick={() => setOpen("Certifications")}>Certification</p>
                    </AnchorLink>
                    {open === "Certifications" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchorLink" offset={50} href='#Contact-Me'>
                        <p onClick={() => setOpen("Contact Me")}>Contact Me</p>
                    </AnchorLink>
                    {open === "Contact Me" ? <img src={underline} alt='' /> : <></>}
                </li>
            </ul>
            <div className="navConnect">
                <AnchorLink className="anchorLink" offset={50} href='#Contact-Me'>Connect With Me</AnchorLink>
            </div>
        </div>
    )
}
