import styles from './navbar.module.css'
import logo from '../../assets/logo.svg'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="" />
            <ul className={styles.navmenu}>
                <li>Home</li>
                <li>About me</li>
                <li>Skills</li>
                <li>Certification</li>
                <li>Contact Me</li>
            </ul>
            <div className={styles.navConnect}>Connect With Me</div>
        </div>
    )
}