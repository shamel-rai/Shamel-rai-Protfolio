import './footer.css';
import footerLogo from '../../assets/footer_logo.svg';
import userIcon from '../../assets/user_icon.svg';
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footerLogo} alt="" />
                    <p>Aspiring frontend developer</p>
                </div>
                <div className="footer-top-right">
                    <div className="email-input">
                        <img src={userIcon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left"> Shamel Rai. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}